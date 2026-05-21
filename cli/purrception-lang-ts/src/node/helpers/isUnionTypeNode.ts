import type { TypeExpressionNode, TypeRef, UnionTypeNode } from '../types';

import { isTypeRef } from './isTypeRef';

export function isUnionTypeNode(exp: TypeExpressionNode | TypeRef): exp is UnionTypeNode {
	return !isTypeRef(exp) && exp.kind === 'union';
}
