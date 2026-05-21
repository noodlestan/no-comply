import type { TypeExpressionDeclaration } from '../../declaration';
import type { TypeExpressionNode } from '../../node';
import { resolveExpression } from '../resolveTypeDeclaration';
import { type ResolveTypeContext } from '../types';

export function resolveTypeExpressionDeclaration(
	context: ResolveTypeContext,
	node: TypeExpressionDeclaration,
): TypeExpressionDeclaration<TypeExpressionNode> {
	return {
		...node,
		node: resolveExpression(context, node.node) as TypeExpressionNode,
	};
}
