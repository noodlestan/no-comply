import { type CompilerAPI, type CompilerScope } from '@purrpose/client-babel';
import { type Component, createMemo } from 'solid-js';
import { Dynamic } from 'solid-js/web';

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
