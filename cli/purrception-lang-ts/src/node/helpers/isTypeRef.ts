import type { TypeExpressionNode, TypeRef } from '../types';

export function isTypeRef(exp: TypeExpressionNode | TypeRef): exp is TypeRef {
	return typeof exp === 'string' || ('type' in exp && !('kind' in exp));
}
