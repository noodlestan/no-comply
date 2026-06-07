import { type TypeExpressionNode, type UnionTypeNode, isUnionTypeNode } from '../../../node';
import type { ResolveTypeContext } from '../../types';
import { resolveExpression } from '../resolveExpression';

export function resolveUnion(context: ResolveTypeContext, exp: UnionTypeNode): UnionTypeNode {
	const resolvedEntries: TypeExpressionNode[] = [];

	for (const entry of exp.entries) {
		const node = resolveExpression(context, entry);

		if (isUnionTypeNode(node)) {
			resolvedEntries.push(...node.entries);
			continue;
		}

		resolvedEntries.push(node);
	}

	return {
		...exp,
		entries: resolvedEntries,
	};
}
