// createRenderingContext.ts
import { createJsDocBlockRenderer, createJsDocLinkResolver } from '@purrtrait/solid-code';

import { useMeta } from '../../Meta';
import type { RenderingContext } from '../types';

export function createRenderingContext(): RenderingContext {
	const { resolveLink } = useMeta();

	const linkResolver = createJsDocLinkResolver({ resolveLink });
	const jsDocBlockRenderer = createJsDocBlockRenderer({ linkResolver });

	return {
		resolveLink: linkResolver.resolveLink,
		renderJsDocDescription: jsDocBlockRenderer.description,
		getJsDocLinks: jsDocBlockRenderer.links,
		getJsDocTags: jsDocBlockRenderer.tags,
	};
}
