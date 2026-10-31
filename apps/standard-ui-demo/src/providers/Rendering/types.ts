import type { SyntaxHighlighterAPI } from '@purrpose/solid-shiki-service';
import type { CodeLayoutAPI, CodeSerializerAPI } from '@purrtrait/code-renderer';
import type { JsDocBlockRendererAPI, JsDocLinkResolverAPI } from '@purrtrait/jsdoc-renderer';
import type { CodeLinkComponent } from '@purrtrait/solid-code';

export type RenderingContext = {
	resolveLink: JsDocLinkResolverAPI['resolveLink'];
	renderJsDocDescription: JsDocBlockRendererAPI['description'];
	getJsDocLinks: JsDocBlockRendererAPI['links'];
	getJsDocTags: JsDocBlockRendererAPI['tags'];
	renderCodeLayout: CodeLayoutAPI['render'];
	serializeCode: CodeSerializerAPI['serialize'];
	codeLinkComponent: CodeLinkComponent;
	createSyntaxHighlighterResource: SyntaxHighlighterAPI['createSyntaxHighlighterResource'];
};
