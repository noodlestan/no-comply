export type JSDocTags = Record<string, string | string[]>;

export type DeclarationJsDocData = {
	description?: string;
	templateTags?: Record<string, string>;
	tags?: JSDocTags;
};

export type FunctionJsDocData = DeclarationJsDocData & {
	paramTags?: Record<string, string>;
	returnsTag?: string;
};
