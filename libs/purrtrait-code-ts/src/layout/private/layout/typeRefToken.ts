import type { CodeLayoutContextValue, CodeLayoutToken } from '@purrtrait/code-layout';

import type { CodeLayoutWithGenericParamsContextValue } from '../../../contexts';
import { BUILTIN_GLOBALS, BUILTIN_TYPES } from '../constants';

function shouldLinkType(
	ctx: CodeLayoutContextValue | CodeLayoutWithGenericParamsContextValue,
	value: string,
): boolean {
	if ((ctx as CodeLayoutWithGenericParamsContextValue).genericParams?.has(value)) {
		return false;
	}
	return !BUILTIN_TYPES.has(value) && !BUILTIN_GLOBALS.has(value);
}

export function typeRefToken(
	ctx: CodeLayoutContextValue | CodeLayoutWithGenericParamsContextValue,
	value: string,
): CodeLayoutToken<'type-ref'> {
	const target = shouldLinkType(ctx, value) ? ctx.linker(ctx, value) : undefined;

	return { type: 'token', kind: 'type-ref', value, link: target };
}
