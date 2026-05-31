import {
	type IntersectionTypeNode,
	type ObjectLiteralTypeMember,
	type ObjectLiteralTypeNode,
	type TypeExpressionNode,
	type TypeRef,
	isIntersectionTypeNode,
} from '../../../node';
import type { ResolveTypeContext } from '../../types';
import { normalizeObjectLiteral } from '../normalize';
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
		indexSignatures: [],
		mappedSignatures: [],
	};

	function mergeMembers(
		target: Record<string, ObjectLiteralTypeMember>,
		source: Record<string, ObjectLiteralTypeMember>,
	) {
		for (const key in source) {
			const member = source[key];

			target[key] = {
				...member,
				type: resolveExpression(context, member.type),
			};
		}
	}

	function mergeObject(target: ObjectLiteralTypeNode, source: ObjectLiteralTypeNode) {
		mergeMembers(target.members, source.members);

		if (target.indexSignatures && source.indexSignatures?.length) {
			target.indexSignatures.push(...source.indexSignatures);
		}

		if (target.mappedSignatures && source.mappedSignatures?.length) {
			target.mappedSignatures.push(...source.mappedSignatures);
		}
	}

	for (const entry of resolvedEntries) {
		const normalized = normalizeObjectLiteral(entry);

		if (!normalized) {
			return {
				...exp,
				entries: resolvedEntries,
			};
		}

		mergeObject(object, normalized);
	}

	return object;
}
