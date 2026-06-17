/* eslint-disable dot-notation */
import { evaluateValue } from '@purrtrait/client-tsx';
import { viewPropsByTarget } from '@purrtrait/view-tsx';
import { type Component, mergeProps } from 'solid-js';

import type { CompilerAPI } from '../../../../../modules/TSXCompilerModule';
import { type ExamplePropsOverrides, type ReadyExampleAPI } from '../../providers';
import { JSXRenderer } from '../JSXRenderer';

import { STATIC_SCOPE } from './constants';
import { TSXViewTargetPlaceholder } from './parts';

type Props = {
	compiler: CompilerAPI;
	example: ReadyExampleAPI;
	overrides?: ExamplePropsOverrides;
};

export const RenderExample: Component<Props> = props => {
	const view = () => props.example.parsed().view;

	const source = () => view().wrapper.serialized;

	const wrapperProps = () => {
		const values = viewPropsByTarget(view(), ([, value]) =>
			evaluateValue(props.compiler, value, STATIC_SCOPE),
		);

		const targetsProps: Record<string, unknown> = {};
		for (const target in values) {
			targetsProps[target] = mergeProps(values[target], props.overrides?.[target] || {});
		}
		return targetsProps;
	};

	const scope = () => ({
		...STATIC_SCOPE,
		TSXViewTargetPlaceholder,
	});

	return (
		<JSXRenderer
			compiler={props.compiler}
			source={source()}
			scope={scope()}
			wrapperProps={wrapperProps()}
		/>
	);
};
