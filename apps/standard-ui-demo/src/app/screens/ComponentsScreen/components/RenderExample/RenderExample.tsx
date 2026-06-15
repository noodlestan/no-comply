/* eslint-disable dot-notation */
import { Button, Display, Flex } from '@no-comply/standard-ui';
import { evaluateValue } from '@purrtrait/client-tsx';
import { type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { type ParsedExampleAPI, useComponentExamples } from '../../providers';
import { JSXRenderer } from '../JSXRenderer';

type Props = {
	example: ParsedExampleAPI;
};

const components = {
	Button,
	Flex,
	Display,
};

export const RenderExample: Component<Props> = props => {
	const { compiler } = useComponentExamples();

	const view = () => props.example.parsed()?.view;

	const source = () => view()?.wrapper.serialized || '';
	const componentName = () => view()?.target.component.name;
	const component = () => {
		const name = componentName();
		if (!name) {
			throw new Error(`Missing component name in ${view()?.source}`);
		}
		if (!(name in components)) {
			throw new Error(`Unknown target component in ${view()?.source}`);
		}
		return components[name as keyof typeof components];
	};

	const propValues = () => {
		const propsMap = view()?.props;
		if (!propsMap) {
			return {};
		}
		return Object.fromEntries(
			Object.entries(propsMap).map(([name, value]) => [
				name,
				evaluateValue(compiler, value, {
					Button,
					Flex,
					Display,
				}),
			]),
		);
	};

	const TSXViewTargetPlaceholder = (props: Record<string, unknown>) => (
		<Dynamic component={component()} {...props} />
	);

	const scope = () => ({
		...components,
		TSXViewTargetPlaceholder,
	});

	return <JSXRenderer compiler={compiler} source={source()} props={propValues()} scope={scope()} />;
};
