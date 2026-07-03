import {
	createCodeLayout,
	createCodeRendererContext,
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

	const codeRendererContext = createCodeRendererContext({
		langs: [tsCodeLayout],
		linker: getSymbolLinkMaybe,
	});

	const codeLayout = createCodeLayout(codeRendererContext);
	const codeSerializer = createCodeSerializer(codeRendererContext);

	return {
		resolveLink: linkResolver.resolveLink,
		renderJsDocDescription: jsDocBlockRenderer.description,
		getJsDocLinks: jsDocBlockRenderer.links,
		getJsDocTags: jsDocBlockRenderer.tags,
		renderCodeLayout: codeLayout.render,
		serializeCode: codeSerializer.serialize,
		codeLinkComponent,
	};
}
