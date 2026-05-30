import {
	type PickTypeNode,
	type TypeExpressionNode,
	type TypeRef,
	isLiteralTypeNode,
	isObjectLiteralTypeNode,
} from '../../../node';
import type { ResolveTypeContext } from '../../types';
import { resolveExpression } from '../resolveExpression';

import { normalizeUnion } from './normalizeUnion';

export function resolvePick(
	context: ResolveTypeContext,
	exp: PickTypeNode,
): TypeExpressionNode | TypeRef {
	const resolvedSource = resolveExpression(context, exp.source);

	if (isObjectLiteralTypeNode(resolvedSource)) {
		const expMembers = normalizeUnion(resolveExpression(context, exp.members));
		const baseMembers = resolvedSource.members;
		const members: typeof baseMembers = {};

		for (const entry of expMembers.entries) {
			if (isLiteralTypeNode(entry) && typeof entry.value === 'string') {
				const member = baseMembers[entry.value];

				if (!member) continue;

				members[entry.value] = {
					...member,
					type: resolveExpression(context, member.type),
				};
			}
		}

		return {
			kind: 'object',
			members,
		};
	}

	return resolvedSource;
}
