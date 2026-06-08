import type { CodeLayoutToken } from '@purrtrait/code-layout';

export function symbolToken(value: string): CodeLayoutToken<'symbol'> {
	return { type: 'token', kind: 'symbol', value };
}
