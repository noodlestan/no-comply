import { createMutationObserver } from '@solid-primitives/mutation-observer';
import {
	type Accessor,
	type Component,
	type Setter,
	createEffect,
	createMemo,
	createSignal,
} from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { CompilerAPI, CompilerScope } from '../../../../modules/TSXCompilerModule';

export type JSXRendererProps = {
	compiler: CompilerAPI;
	source: string;
	scope: CompilerScope;
	wrapperProps: Record<string, unknown>;
	ref?: (el: HTMLElement) => void;
	onContentsChanged?: (html: string) => void;
};

export const JSXRenderer: Component<JSXRendererProps> = props => {
	const [ref, setRef] = createSignal<HTMLElement>();

	const Component = createMemo(() => {
		return props.compiler.evaluateComponent<Component>(undefined, props.source, props.scope);
	});

	createEffect(() => {
		props.onContentsChanged?.(ref()?.innerHTML as string);
		const eventHandler = props.onContentsChanged;
		if (eventHandler) {
			const options = { attributes: true, subtree: true, childList: true, characterData: true };
			const handleMutation = () => eventHandler(ref()?.innerHTML as string);
			createMutationObserver(ref as Accessor<HTMLElement>, options, handleMutation);
		}
	});

	const setElemetRef = (el: HTMLElement) => {
		setRef(el);
		props.ref?.(el);
	};

	// WIP make div display: content
	return (
		<div ref={setElemetRef as Setter<HTMLElement>}>
			<Dynamic component={Component()} {...props.wrapperProps} />
		</div>
	);
};
