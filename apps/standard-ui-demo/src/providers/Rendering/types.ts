import type { SyntaxHighlighterAPI } from '@purrpose/solid-shiki-service';
import type { CodeLayoutAPI, CodeSerializerAPI } from '@purrtrait/code-renderer';
import type {
	CodeLinkComponent,
	JsDocBlockRendererAPI,
	JsDocLinkResolverAPI,
} from '@purrtrait/solid-code';

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
