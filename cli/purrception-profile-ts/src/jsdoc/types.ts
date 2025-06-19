export type FunctionJsDoc = {
	description?: string;
	paramTags: Map<string, string>;
	returnsTag?: string;
	tags: Map<string, string>;
};

export type DeclarationJsDoc = {
	description?: string;
	tags: Map<string, string>;
};
