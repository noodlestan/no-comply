import type { TypeExpressionNode, TypeRef } from '@purrception/types-ts';

export function isTypeExpressionNode(
	data: TypeExpressionNode | TypeRef,
): data is TypeExpressionNode {
	return !!data && typeof data === 'object' && 'kind' in data;
}
