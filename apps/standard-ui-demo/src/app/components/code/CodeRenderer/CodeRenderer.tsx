import { createChainedResource, createCombinedResource } from '@no-comply/solid-primitives';
import * as htmlParser from 'prettier/plugins/html';
import * as prettier from 'prettier/standalone';
import { codeToHtml } from 'shiki';
import { type Component, createEffect, createResource, createSignal } from 'solid-js';

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
			return (await codeToHtml(code, {
				lang,
				theme: 'slack-dark',
			})) as string;
		},
	);

	createEffect(() => {
		const element = ref();
		const html = syntaxHighlighted();
		if (html && element) {
			element.innerHTML = html as string;
		}
	});

	return <div ref={setRef} />;
};
