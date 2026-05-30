import {
	type IntersectionTypeNode,
	type ObjectLiteralTypeMember,
	type ObjectLiteralTypeNode,
	type TypeExpressionNode,
	type TypeRef,
	isIntersectionTypeNode,
	isObjectLiteralTypeNode,
} from '../../../node';
import type { ResolveTypeContext } from '../../types';
import { resolveExpression } from '../resolveExpression';

export function resolveIntersection(
	context: ResolveTypeContext,
	exp: IntersectionTypeNode,
): TypeExpressionNode | TypeRef {
	const resolvedEntries: (TypeExpressionNode | TypeRef)[] = [];

	for (const entry of exp.entries) {
		const resolved = resolveExpression(context, entry);
		if (isIntersectionTypeNode(resolved)) {
			resolvedEntries.push(...resolved.entries);
			continue;
		}
		resolvedEntries.push(resolved);
	}

	const object: ObjectLiteralTypeNode = {
		kind: 'object',
		members: {},
	};

	function mergeMembers(
		target: Record<string, ObjectLiteralTypeMember>,
		source: Record<string, ObjectLiteralTypeMember>,
	) {
		for (const key in source) {
			const member = source[key] as ObjectLiteralTypeMember;

			target[key] = {
				...member,
				type: resolveExpression(context, member.type),
			};
		}
	}

	for (const entry of resolvedEntries) {
		if (!isObjectLiteralTypeNode(entry)) {
			return {
				...exp,
				entries: resolvedEntries,
			};
		}

		mergeMembers(object.members, entry.members);
	}

	return object;
}
