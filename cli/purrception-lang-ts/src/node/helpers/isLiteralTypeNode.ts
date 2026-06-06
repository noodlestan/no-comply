import type { LiteralTypeNode, TypeExpressionNode } from '../types';

export function isLiteralTypeNode(exp: TypeExpressionNode): exp is LiteralTypeNode {
	return exp.kind === 'literal';
}
