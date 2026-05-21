import type { CodeLayoutToken } from '@purrtrait/code-layout';

export function identifierToken(value: string): CodeLayoutToken<'identifier'> {
	return { type: 'token', kind: 'identifier', value };
}
