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
		if (!member) {
			continue;
		}

		const node = resolveExpression(context, member.type);
		resolvedMembers[key] = {
			...member,
			type: { ...node, _source: exp._source },
		};
	}

	return {
		...exp,
		members: resolvedMembers,
	};
}
