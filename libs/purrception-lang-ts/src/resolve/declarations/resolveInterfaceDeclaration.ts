import type { InterfaceDeclaration, TypeExpressionDeclaration } from '../../declaration';
import type { ObjectLiteralTypeMember, ObjectLiteralTypeNode } from '../../node';
import { resolveExpression } from '../expressions';
import { type ResolveTypeContext } from '../types';

function mergeObject(
	context: ResolveTypeContext,
	target: ObjectLiteralTypeNode,
	source: ObjectLiteralTypeNode,
) {
	for (const key in source.members) {
		const member = source.members[key] as ObjectLiteralTypeMember;

		const node = resolveExpression(context, member.type);
		target.members[key] = {
			...member,
			type: { ...node, _source: member._source || source._source },
		};
	}
}

export function resolveInterfaceDeclaration(
	context: ResolveTypeContext,
	declaration: InterfaceDeclaration,
): TypeExpressionDeclaration<ObjectLiteralTypeNode> {
	const {
		at,
		name,
		generic,
		members = {},
		heritage = [],
		description,
		templateTags,
		tags,
	} = declaration;

	const object: ObjectLiteralTypeNode = {
		kind: 'object',
		generic,
		members: {},
	};

	for (const h of heritage) {
		const node = resolveExpression(context, h);
		if (node.kind === 'object') {
			mergeObject(context, object, node);
		}
	}

	for (const key in members) {
		const member = members[key] as ObjectLiteralTypeMember;
		const node = resolveExpression(context, member.type);
		object.members[key] = {
			...member,
			type: { ...node, _source: member._source },
		};
	}

	return {
		at,
		name,
		kind: 'type',
		node: object,
		description,
		templateTags,
		tags,
	};
}
