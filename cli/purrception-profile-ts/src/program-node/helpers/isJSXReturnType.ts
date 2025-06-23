import type { FunctionReturnsData } from '../../types';

export function isJSXReturnType(returns: FunctionReturnsData | undefined): boolean {
	if (!returns || returns === 'void') {
		return false;
	}

	return typeof returns.type === 'string' && returns.type.includes('JSX.Element');
}
