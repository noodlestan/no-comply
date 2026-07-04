// CodeRenderer.tsx
import { staticClassList } from '@no-comply/solid-primitives';
import { Mono } from '@no-comply/standard-ui';
import { type Component, createEffect, createSignal } from 'solid-js';

import { useRendering } from '../../../../providers';

import styles from './CodeRenderer.module.scss';

type CodeRendererProps = {
	code: string;
	lang: string;
	symbols?: ReadonlyMap<string, string>;
	class?: string;
};

export const CodeRenderer: Component<CodeRendererProps> = props => {
	const [ref, setRef] = createSignal<HTMLElement>();
	const { createSyntaxHighlighterResource } = useRendering();

	const syntaxHighlighted = createSyntaxHighlighterResource(
		() => props.lang,
		() => props.code,
		() => props.symbols,
	);

	createEffect(() => {
		const element = ref();
		const html = syntaxHighlighted();
		if (element && html) {
			element.innerHTML = html;
		}
	});

	const classList = staticClassList(styles, 'CodeRenderer');

	return <Mono ref={setRef} classList={classList} />;
};
