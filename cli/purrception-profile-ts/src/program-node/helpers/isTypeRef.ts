import type { TypeExpressionData, TypeRef } from '../../types';

export function isTypeRef(type: TypeExpressionData | TypeRef): type is TypeRef {
	return typeof type === 'string' || 'type' in type;
}
