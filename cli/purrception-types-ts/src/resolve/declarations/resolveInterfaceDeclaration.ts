import type { InterfaceDeclaration, TypeExpressionDeclaration } from '../../declaration';
import type {
	ObjectLiteralTypeMember,
	ObjectLiteralTypeNode,
	TypeExpressionNode,
} from '../../node';
import { resolveExpression } from '../resolveTypeDeclaration';
import { type ResolveTypeContext } from '../types';

export function resolveInterfaceDeclaration(
	context: ResolveTypeContext,
	node: InterfaceDeclaration,
): TypeExpressionDeclaration<TypeExpressionNode> {
	const { members = {}, heritage = [] } = node;

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

			const resolvedType = resolveExpression(context, member.type);

			target[key] = {
				...member,
				type: resolvedType,
			};
		}
	}

	for (const h of heritage) {
		const resolved = resolveExpression(context, h);

		if (
			resolved &&
			typeof resolved !== 'string' &&
			!('type' in resolved) &&
			resolved.kind === 'object'
		) {
			mergeMembers(object.members, resolved.members ?? {});
		}
	}

	for (const key in members) {
		const member = members[key] as ObjectLiteralTypeMember;

		const resolvedType = resolveExpression(context, member.type);

		object.members[key] = {
			...member,
			type: resolvedType,
		};
	}

	return {
		...node,
		kind: 'type',
		node: object,
	};
}
