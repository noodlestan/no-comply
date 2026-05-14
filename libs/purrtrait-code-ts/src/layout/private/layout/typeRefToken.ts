import type { CodeLayoutContextValue, CodeLayoutToken } from '@purrtrait/code-layout';

export function typeRefToken(
	ctx: CodeLayoutContextValue,
	value: string,
): CodeLayoutToken<'type-ref'> {
	return { type: 'token', kind: 'type-ref', value };
}
