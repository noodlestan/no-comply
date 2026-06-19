import { type Component, createMemo } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { CompilerAPI, CompilerScope } from '../../../../modules/TSXCompilerModule';

export type JSXRendererProps = {
	compiler: CompilerAPI;
	source: string;
	scope: CompilerScope;
	wrapperProps: Record<string, unknown>;
};

export const JSXRenderer: Component<JSXRendererProps> = props => {
	const Component = createMemo(() => {
		return props.compiler.evaluateComponent<Component>(undefined, props.source, props.scope);
	});

	return <Dynamic component={Component()} {...props.wrapperProps} />;
};
