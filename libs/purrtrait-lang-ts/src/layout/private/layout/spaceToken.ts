import type { CodeLayoutToken } from '@purrtrait/code-layout';

export function spaceToken(): CodeLayoutToken<'space'> {
	return { type: 'token', kind: 'space', value: ' ' };
}
