import type { TypeExpressionNode } from '../types';

export function isTypeExpressionNode(exp: TypeExpressionNode): exp is TypeExpressionNode {
	if (!exp || typeof exp !== 'object' || !('kind' in exp)) {
		return false;
	}
	return true;
}
