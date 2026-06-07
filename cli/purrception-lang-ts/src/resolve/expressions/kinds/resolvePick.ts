import {
	type PickTypeNode,
	type TypeExpressionNode,
	isLiteralTypeNode,
	isObjectLiteralTypeNode,
} from '../../../node';
import type { ResolveTypeContext } from '../../types';
import { normalizeUnion } from '../normalize';
import { resolveExpression } from '../resolveExpression';

export function resolvePick(context: ResolveTypeContext, exp: PickTypeNode): TypeExpressionNode {
	const { source, members: expMembers, ...rest } = exp;
	const node = resolveExpression(context, source);

	if (isObjectLiteralTypeNode(node)) {
		const normalizedMembers = normalizeUnion(resolveExpression(context, expMembers));
		const baseMembers = node.members;
		const members: typeof baseMembers = {};

		for (const entry of normalizedMembers.entries) {
			if (isLiteralTypeNode(entry) && typeof entry.value === 'string') {
				const member = baseMembers[entry.value];
				if (!member) {
					continue;
				}

				const node = resolveExpression(context, member.type);
				members[entry.value] = {
					...member,
					type: {
						...node,
						_source: node._source || member._source || node._source || exp._source,
					},
				};
			}
		}

		return {
			...rest,
			kind: 'object',
			members,
		};
	}

	return node;
}
