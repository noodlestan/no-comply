import type { ObjectLiteralTypeMember, ObjectLiteralTypeNode } from '../../../node';
import type { ResolveTypeContext } from '../../types';
import { resolveExpression } from '../resolveExpression';

export function resolveObject(
	context: ResolveTypeContext,
	exp: ObjectLiteralTypeNode,
): ObjectLiteralTypeNode {
	const resolvedMembers: Record<string, ObjectLiteralTypeMember> = {};

	for (const key in exp.members) {
		const member = exp.members[key];

		if (!member) continue;

		resolvedMembers[key] = {
			...member,
			type: resolveExpression(context, member.type),
		};
	}

	return {
		...exp,
		members: resolvedMembers,
	};
}
