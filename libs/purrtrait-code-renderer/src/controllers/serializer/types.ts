export type CodeSerializerLinkResolver = (value: string) => string | undefined;

export type CodeSerializerOptions = {
	linkResolver?: CodeSerializerLinkResolver;
	columns?: number;
};

export type CodeSerializerOutput = {
	code: string;
	symbols: Map<string, string>;
};

export type CodeSerializerAPI = {
	serialize: (
		ctx: import('../layout/contexts').CodeLayoutContextValue,
		lang: string,
		node: object,
	) => CodeSerializerOutput;
};
