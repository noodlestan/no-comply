// RenderingContext.ts
import type { JsDocBlockRendererAPI, JsDocLinkResolverAPI } from '@purrtrait/solid-code';

export type RenderingContext = {
	resolveLink: JsDocLinkResolverAPI['resolveLink'];
	renderJsDocDescription: JsDocBlockRendererAPI['description'];
	getJsDocLinks: JsDocBlockRendererAPI['links'];
	getJsDocTags: JsDocBlockRendererAPI['tags'];
};
