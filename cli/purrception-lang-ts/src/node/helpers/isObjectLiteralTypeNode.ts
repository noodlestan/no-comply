import type { ObjectLiteralTypeNode, TypeExpressionNode, TypeRef } from '../types';

import { isTypeRef } from './isTypeRef';

export function isObjectLiteralTypeNode(
	exp: TypeExpressionNode | TypeRef,
): exp is ObjectLiteralTypeNode {
	return !isTypeRef(exp) && exp.kind === 'object';
}
