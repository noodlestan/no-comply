/* eslint-disable dot-notation */
import { evaluateValue } from '@purrtrait/client-tsx';
import { type TSXView, viewPropsByTarget } from '@purrtrait/view-tsx';
import { type Component, mergeProps } from 'solid-js';

import type { CompilerAPI } from '../../../../../modules/TSXCompilerModule';
import { JSXRenderer } from '../../../../components';
import { type ExamplePropsOverrides } from '../../providers';

import { STATIC_SCOPE } from './constants';
import { TSXViewTargetPlaceholder } from './parts';

type Props = {
	compiler: CompilerAPI;
	parsed: TSXView;
	overrides?: ExamplePropsOverrides;
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
		<JSXRenderer
			compiler={props.compiler}
			source={source()}
			scope={scope()}
			wrapperProps={wrapperProps()}
		/>
	);
};
