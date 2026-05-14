import type { TypeExpressionNode, TypeRef } from '@purrception/types-ts';

export function isTypeRef(type: TypeExpressionNode | TypeRef): type is TypeRef {
	return typeof type === 'string' || 'type' in type;
}
