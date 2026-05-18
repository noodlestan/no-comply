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

export interface CodeLayoutToken<T extends CodeLayoutTokenKind = CodeLayoutTokenKind> {
	type: 'token';
	kind: T;
	value: string;
	link?: string;
}

export interface CodeLayoutGroup {
	type: 'group';
	content: CodeLayoutNode[];
}

export interface CodeLayoutBlock {
	type: 'block';
	content: CodeLayoutGroup[];
}

export type CodeLayoutNode =
	| CodeLayoutToken<CodeLayoutTokenKind>
	| CodeLayoutGroup
	| CodeLayoutBlock;

export interface CodeLayoutLanguage {
	lang: string;
	layout: (ctx: CodeLayoutContextValue, node: object) => CodeLayoutNode[];
}

export interface CodeLayoutLine {
	indent: number;
	content: CodeLayoutToken[];
}
