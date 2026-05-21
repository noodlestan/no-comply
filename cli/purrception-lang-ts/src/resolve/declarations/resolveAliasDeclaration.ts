import type { AliasDeclaration, TypeExpressionDeclaration } from '../../declaration';
import type { TypeExpressionNode } from '../../node';
import { resolveExpression } from '../resolveTypeDeclaration';
import { type ResolveTypeContext } from '../types';

export function resolveAliasDeclaration(
	context: ResolveTypeContext,
	node: AliasDeclaration,
): TypeExpressionDeclaration<TypeExpressionNode> {
	return {
		...node,
		kind: 'type',
		node: resolveExpression(context, node.target) as TypeExpressionNode,
	};
}
