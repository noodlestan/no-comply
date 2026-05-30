import {
	type TypeExpressionNode,
	type TypeRef,
	type UnionTypeNode,
	isUnionTypeNode,
} from '../../../node';
import type { ResolveTypeContext } from '../../types';
import { resolveExpression } from '../resolveExpression';

export function resolveUnion(context: ResolveTypeContext, exp: UnionTypeNode): UnionTypeNode {
	const resolvedEntries: (TypeExpressionNode | TypeRef)[] = [];

	for (const entry of exp.entries) {
		const resolved = resolveExpression(context, entry);

		if (isUnionTypeNode(resolved)) {
			resolvedEntries.push(...resolved.entries);
			continue;
		}

		resolvedEntries.push(resolved);
	}

	return {
		...exp,
		entries: resolvedEntries,
	};
}
