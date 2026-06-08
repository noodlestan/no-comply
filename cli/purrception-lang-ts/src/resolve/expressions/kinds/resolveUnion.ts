import {
	type TypeExpressionNode,
	type UnionTypeNode,
	isLiteralTypeNode,
	isUnionTypeNode,
} from '../../../node';
import type { ResolveTypeContext } from '../../types';
import { resolveExpression } from '../resolveExpression';

export function resolveUnion(context: ResolveTypeContext, exp: UnionTypeNode): UnionTypeNode {
	const resolvedEntries: TypeExpressionNode[] = [];

	for (const entry of exp.entries) {
		const node = resolveExpression(context, entry);

		if (isUnionTypeNode(node)) {
			for (const unionEntry of node.entries) {
				if (isLiteralTypeNode(unionEntry, 'string')) {
					resolvedEntries.push(unionEntry);
				}
			}

			continue;
		}

		if (isLiteralTypeNode(node, 'string')) {
			resolvedEntries.push(node);
		}
	}

	return {
		...exp,
		entries: resolvedEntries,
	};
}
