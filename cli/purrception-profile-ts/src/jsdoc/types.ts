export type JSDocTags = Record<string, string | string[]>;

export interface DeclarationJsDocData {
	description?: string;
	templateTags?: Record<string, string>;
	tags?: JSDocTags;
}

export interface FunctionJsDocData extends DeclarationJsDocData {
	paramTags?: Record<string, string>;
	returnsTag?: string;
}
