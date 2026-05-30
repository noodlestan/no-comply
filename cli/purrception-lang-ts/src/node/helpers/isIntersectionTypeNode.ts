import type { IntersectionTypeNode, TypeExpressionNode, TypeRef } from '../types';

import { isTypeRef } from './isTypeRef';

export function isIntersectionTypeNode(
	exp: TypeExpressionNode | TypeRef,
): exp is IntersectionTypeNode {
	return !isTypeRef(exp) && exp.kind === 'intersection';
}
