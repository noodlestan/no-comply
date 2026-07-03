import { isBuiltInToken } from '@purrception/lang-ts';
import type { CodeLayoutContextValue } from '@purrtrait/code-renderer';

import type { CodeLayoutWithGenericParamsContextValue } from '../../../../contexts';

export function shouldLinkToken(
	ctx: CodeLayoutContextValue | CodeLayoutWithGenericParamsContextValue,
	value: string,
): boolean {
	if ((ctx as CodeLayoutWithGenericParamsContextValue).genericParams?.has(value)) {
		return false;
	}
	return !isBuiltInToken(value);
}
