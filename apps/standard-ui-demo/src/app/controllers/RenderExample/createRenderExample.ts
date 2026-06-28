import { type TSXNode, evaluateValue } from '@purrtrait/client-tsx';
import { viewPropsByTarget } from '@purrtrait/view-tsx';
import { mergeProps } from 'solid-js';

import { STATIC_SCOPE } from './constants';
import { TSXViewTargetPlaceholder } from './parts';
import type { RenderExampleAPI, RenderExampleProps } from './types';

export const createRenderExample = (props: RenderExampleProps): RenderExampleAPI => {
	const view = () => props.view;

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
			const p: Record<string, unknown> = {};
			const targetOverrides = props.overrides?.[target] || {};
			for (const target in targetOverrides) {
				const node: TSXNode = {
					type: 'jsx',
					serialized: targetOverrides[target] as string,
				} as TSXNode;
				p[target] = evaluateValue(props.compiler, node, STATIC_SCOPE);
			}
			targetsProps[target] = mergeProps(values[target], p);
		}
		return targetsProps;
	};

	const scope = () => ({
		...STATIC_SCOPE,
		TSXViewTargetPlaceholder,
	});

	return {
		source,
		wrapperProps,
		scope,
	};
};
