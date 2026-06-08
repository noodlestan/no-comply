import type { CodeLayoutContextValue, CodeLayoutToken } from '@purrtrait/code-layout';

import type { CodeLayoutWithGenericParamsContextValue } from '../../../contexts';

import { shouldLinkToken } from './helpers';

export function typeRefToken(
	ctx: CodeLayoutContextValue | CodeLayoutWithGenericParamsContextValue,
	value: string,
): CodeLayoutToken<'type-ref'> {
	const target = shouldLinkToken(ctx, value) ? ctx.linker(ctx, value) : undefined;

	return { type: 'token', kind: 'type-ref', value, link: target };
}
