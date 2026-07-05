import { createSyntaxHighlighter } from '@purrpose/solid-shiki-service';
import {
	createCodeLayout,
	createCodeRendererOptions,
	createCodeSerializer,
} from '@purrtrait/code-renderer';
import { tsCodeLayout } from '@purrtrait/lang-ts';
import type { CodeLinkComponent } from '@purrtrait/solid-code';
import { createJsDocBlockRenderer, createJsDocLinkResolver } from '@purrtrait/solid-code';

import { useMeta } from '../../Meta';
import type { RenderingContext } from '../types';

import { getSymbolLinkMaybe } from './helpers';

export function createRenderingContext(codeLinkComponent: CodeLinkComponent): RenderingContext {
	const { resolveLink } = useMeta();

	const linkResolver = createJsDocLinkResolver({ resolveLink });
	const jsDocBlockRenderer = createJsDocBlockRenderer({ linkResolver });

	const codeRendererOptions = createCodeRendererOptions({
		langs: [tsCodeLayout],
		linker: getSymbolLinkMaybe,
	});

	const codeLayout = createCodeLayout(codeRendererOptions);
	const codeSerializer = createCodeSerializer(codeRendererOptions);

	const syntaxHighlighter = createSyntaxHighlighter({});

	return {
		resolveLink: linkResolver.resolveLink,
		renderJsDocDescription: jsDocBlockRenderer.description,
		getJsDocLinks: jsDocBlockRenderer.links,
		getJsDocTags: jsDocBlockRenderer.tags,
		renderCodeLayout: codeLayout.render,
		serializeCode: codeSerializer.serialize,
		createSyntaxHighlighterResource: syntaxHighlighter.createSyntaxHighlighterResource,
		codeLinkComponent,
	};
}
