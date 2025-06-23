import type { TypeExpressionData, TypeRef } from '../../types';

export function isTypeExpressionData(
	data: TypeExpressionData | TypeRef,
): data is TypeExpressionData {
	return !!data && typeof data === 'object' && 'kind' in data;
}
