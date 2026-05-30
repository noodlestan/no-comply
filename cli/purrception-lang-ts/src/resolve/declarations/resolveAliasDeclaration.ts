import type { AliasDeclaration, TypeExpressionDeclaration } from '../../declaration';
import type { TypeExpressionNode } from '../../node';
import { resolveExpression } from '../expressions';
import { type ResolveTypeContext } from '../types';

export function resolveAliasDeclaration(
	context: ResolveTypeContext,
	declaration: AliasDeclaration,
): TypeExpressionDeclaration<TypeExpressionNode> {
	return {
		...declaration,
		kind: 'type',
		node: resolveExpression(context, declaration.target) as TypeExpressionNode,
	};
}
