import type { MappedTypeNode, TypeExpressionNode, TypeRef } from '../types';

import { isTypeRef } from './isTypeRef';

export function isMappedTypeNode(exp: TypeExpressionNode | TypeRef): exp is MappedTypeNode {
	return !isTypeRef(exp) && exp.kind === 'mapped';
}
