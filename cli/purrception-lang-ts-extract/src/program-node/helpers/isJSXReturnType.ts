import type { FunctionTypeReturns } from '@purrception/lang-ts';

export function isJSXReturnType(returns: FunctionTypeReturns | undefined): boolean {
	if (!returns || returns.type === 'void') {
		return false;
	}

	return typeof returns.type === 'string' && returns.type.includes('JSX.Element');
}
