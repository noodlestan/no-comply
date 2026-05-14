import type { CodeLayoutGroup, CodeLayoutNode } from '@purrtrait/code-layout';

export function block(content: CodeLayoutGroup[]): CodeLayoutNode {
	return { type: 'block', content };
}
