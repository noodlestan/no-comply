import {
	type OmitTypeNode,
	type TypeExpressionNode,
	type TypeRef,
	isLiteralTypeNode,
	isObjectLiteralTypeNode,
} from '../../../node';
import type { ResolveTypeContext } from '../../types';
import { resolveExpression } from '../resolveExpression';

import { normalizeUnion } from './normalizeUnion';

export function resolveOmit(
	context: ResolveTypeContext,
	exp: OmitTypeNode,
): TypeExpressionNode | TypeRef {
	const resolvedSource = resolveExpression(context, exp.source);

	if (isObjectLiteralTypeNode(resolvedSource)) {
		const expMembers = normalizeUnion(resolveExpression(context, exp.members));
		const baseMembers = resolvedSource.members;
		const omitted = new Set<string>();

		for (const entry of expMembers.entries) {
			if (isLiteralTypeNode(entry) && typeof entry.value === 'string') {
				omitted.add(entry.value);
			}
		}

		const members: typeof baseMembers = {};

		for (const key in baseMembers) {
			if (omitted.has(key)) continue;

			const member = baseMembers[key];

			if (!member) continue;

			members[key] = {
				...member,
				type: resolveExpression(context, member.type),
			};
		}

		return {
			kind: 'object',
			members,
		};
	}

	return resolvedSource;
}
