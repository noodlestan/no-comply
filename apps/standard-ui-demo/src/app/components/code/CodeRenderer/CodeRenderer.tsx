import {
	createChainedResource,
	createCombinedResource,
	staticClassList,
} from '@no-comply/solid-primitives';
import { Code } from '@no-comply/standard-ui';
import * as htmlParser from 'prettier/plugins/html';
import * as prettier from 'prettier/standalone';
import { createHighlighter } from 'shiki';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import { type Component, createEffect, createResource, createSignal } from 'solid-js';

import styles from './CodeRenderer.module.scss';

const jsEngine = createJavaScriptRegexEngine();

const prettierPlugins = [htmlParser];

type CodeRendererProps = {
	code: string;
	lang: 'json' | 'javascript';
	class?: string;
};

export const CodeRenderer: Component<CodeRendererProps> = props => {
	const [ref, setRef] = createSignal<HTMLElement>();

	const [formattedCode] = createResource(
		() => [props.code, props.lang] as const,
		async ([code]) => {
			return await prettier.format(code, {
				parser: 'html',
				plugins: prettierPlugins,
				printWidth: 40,
				htmlWhitespaceSensitivity: 'ignore',
				proseWrap: 'always',
			});
		},
	);

	const [syntaxHighlighted] = createChainedResource(
		createCombinedResource([formattedCode, () => props.lang]),
		async ([code, lang]) => {
			if (!code) {
				return;
			}

			const shiki = await createHighlighter({
				themes: ['github-dark-dimmed'],
				engine: jsEngine,
				langs: ['json', 'javascript'],
			});

			return (await shiki.codeToHtml(code, { lang, theme: 'github-dark-dimmed' })) as string;
		},
	);

	createEffect(() => {
		const element = ref();
		const html = syntaxHighlighted();
		if (html && element) {
			element.innerHTML = html as string;
		}
	});

	const classList = staticClassList(styles, 'CodeRenderer');

	return <Code tag="div" size="small" ref={setRef} classList={classList} />;
};
