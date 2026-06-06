import {
	type IntersectionTypeNode,
	type ObjectLiteralTypeNode,
	type TypeExpressionNode,
	isIntersectionTypeNode,
} from '../../../node';
import type { ResolveTypeContext } from '../../types';
import { normalizeObjectLiteral } from '../normalize';
import { resolveExpression } from '../resolveExpression';

export function resolveIntersection(
	context: ResolveTypeContext,
	exp: IntersectionTypeNode,
): TypeExpressionNode {
	const resolvedEntries: TypeExpressionNode[] = [];

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
		resolved: {
			entity: context.entity,
		},
	};

	function mergeMembers(target: ObjectLiteralTypeNode, source: ObjectLiteralTypeNode) {
		for (const key in source.members) {
			const member = source.members[key];

			const type = resolveExpression(context, member.type);

			if (typeof type === 'object') {
				target.members[key] = {
					...member,
					type: { ...type, resolved: source.resolved },
				};
			} else {
				target.members[key] = {
					...member,
					type,
				};
			}
		}
	}

	function mergeObject(target: ObjectLiteralTypeNode, source: ObjectLiteralTypeNode) {
		mergeMembers(target, source);

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
