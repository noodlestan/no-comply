import type { CodeLayoutToken } from '@purrtrait/code-layout';

export function stringToken(value: string): CodeLayoutToken<'string'> {
	return { type: 'token', kind: 'string', value };
}
