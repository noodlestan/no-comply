import type { CodeLayoutContextValue } from './contexts';

// | 'punctuation'
// | 'type'
// | 'string'
// | 'number'
// | 'operator'
// | 'comment'
// | 'modifier'
// | 'generic'
// | 'accessor'
// | 'param';

export type CodeLayoutTokenKind =
	| 'space'
	| 'keyword'
	| 'identifier'
	| 'symbol'
	| 'type-ref'
	| 'string'
	| 'literal';

export type CodeLayoutToken<T extends CodeLayoutTokenKind = CodeLayoutTokenKind> = {
	type: 'token';
	kind: T;
	value: string;
	link?: string;
};

export type CodeLayoutGroup = {
	type: 'group';
	content: CodeLayoutNode[];
};

export type CodeLayoutBlock = {
	type: 'block';
	content: CodeLayoutGroup[];
};

export type CodeLayoutNode =
	| CodeLayoutToken<CodeLayoutTokenKind>
	| CodeLayoutGroup
	| CodeLayoutBlock;

export type CodeLayoutLanguage = {
	lang: string;
	name: string;
	layout: (ctx: CodeLayoutContextValue, node: object | string) => CodeLayoutNode[];
};

export type CodeLayoutLine = {
	indent: number;
	content: CodeLayoutToken[];
};
