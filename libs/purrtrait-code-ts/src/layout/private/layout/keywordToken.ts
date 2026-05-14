import type { CodeLayoutToken } from '@purrtrait/code-layout';

export function keywordToken(value: string): CodeLayoutToken<'keyword'> {
	return { type: 'token', kind: 'keyword', value };
}
