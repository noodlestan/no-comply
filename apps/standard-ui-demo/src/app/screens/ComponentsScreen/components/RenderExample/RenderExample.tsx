/* eslint-disable dot-notation */
import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Layout } from '@no-comply/standard-ui';
import { evaluateValue } from '@purrtrait/client-tsx';
import { type TSXView, viewPropsByTarget } from '@purrtrait/view-tsx';
import { type Component, type JSX, Show, mergeProps } from 'solid-js';

import type { CompilerAPI } from '../../../../../modules/TSXCompilerModule';
import { JSXRenderer } from '../../../../components';
import { type ExamplePropsOverrides } from '../../providers';

import styles from './RenderExample.module.scss';
import { STATIC_SCOPE } from './constants';
import { TSXViewTargetPlaceholder } from './parts';

type Props = {
	compiler: CompilerAPI;
	parsed: TSXView;
	overrides?: ExamplePropsOverrides;
	controls?: () => JSX.Element;
};

export const RenderExample: Component<Props> = props => {
	const view = () => props.parsed;

	const source = () => view().wrapper.serialized;

	// 	const code = `<ContextRootProvider root={root}>
	// 	<ModeContextProvider context={modeContext}>
	// 		<ThemeContextProvider context={themeContext}>
	// 			<SurfaceContextProvider context={surfaceContext}>
	// 				<ContextEffects />
	// 				${tsx}
	// 			</SurfaceContextProvider>
	// 		</ThemeContextProvider>
	// 	</ModeContextProvider>
	// </ContextRootProvider>`;

	const wrapperProps = () => {
		// eslint-disable-next-line solid/reactivity
		const values = viewPropsByTarget(view(), ([, value]) => {
			return evaluateValue(props.compiler, value, STATIC_SCOPE);
		});

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
		<Layout stretch="full" classList={staticClassList(styles, 'RenderExample')}>
			<Show when={props.controls}>
				<Flex classList={staticClassList(styles, '-Controls')}>{props.controls?.()}</Flex>
			</Show>
			<JSXRenderer
				compiler={props.compiler}
				source={source()}
				scope={scope()}
				wrapperProps={wrapperProps()}
			/>
		</Layout>
	);
};
