import type { CodeNodeLinker } from '../../types';

export type CodeSerializerOptions = {
	columns?: number;
	linker?: CodeNodeLinker;
};

export type CodeSerializerOutput = {
	code: string;
	symbols: Map<string, string>;
};

export type CodeSerializerAPI = {
	serialize: (
		lang: string,
		node: object | object[],
		linkerContext?: object,
	) => CodeSerializerOutput;
};
