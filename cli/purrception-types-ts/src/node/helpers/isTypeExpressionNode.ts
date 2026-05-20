import type { TypeExpressionNode, TypeRef } from '../types';

export function isTypeExpressionNode(
	data: TypeExpressionNode | TypeRef,
): data is TypeExpressionNode {
	if (!data || typeof data !== 'object' || !('kind' in data)) {
		return false;
	}
	return true;
}
