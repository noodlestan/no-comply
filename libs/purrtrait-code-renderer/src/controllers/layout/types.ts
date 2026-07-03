import type { CodeLayoutLine } from '../../structure';
import type { CodeNodeLinker } from '../../types';

export type CodeLayoutOptions = {
	columns?: number;
	linker?: CodeNodeLinker;
};

export type CodeLayoutAPI = {
	render: (lang: string, node: object | object[], linkerContext: object) => CodeLayoutLine[];
};
