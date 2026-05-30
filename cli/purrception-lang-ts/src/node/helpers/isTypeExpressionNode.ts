import type { TypeExpressionNode, TypeRef } from '../types';

export function isTypeExpressionNode(exp: TypeExpressionNode | TypeRef): exp is TypeExpressionNode {
	if (!exp || typeof exp !== 'object' || !('kind' in exp)) {
		return false;
	}
	return true;
}
