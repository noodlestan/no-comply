import type { LiteralTypeNode, TypeExpressionNode, TypeRef } from '../types';

import { isTypeRef } from './isTypeRef';

export function isLiteralTypeNode(exp: TypeExpressionNode | TypeRef): exp is LiteralTypeNode {
	return !isTypeRef(exp) && exp.kind === 'literal';
}
