import type { CodeLayoutGroup, CodeLayoutNode } from '@purrtrait/code-layout';

export function group(content: CodeLayoutNode[]): CodeLayoutGroup {
	return { type: 'group', content };
}
