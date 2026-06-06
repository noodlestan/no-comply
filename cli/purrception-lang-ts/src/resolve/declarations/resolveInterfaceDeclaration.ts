import type { InterfaceDeclaration, TypeExpressionDeclaration } from '../../declaration';
import type { ObjectLiteralTypeMember, ObjectLiteralTypeNode } from '../../node';
import { resolveExpression } from '../expressions';
import { type ResolveTypeContext } from '../types';

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

	function mergeMembers(
		target: Record<string, ObjectLiteralTypeMember>,
		source: Record<string, ObjectLiteralTypeMember>,
	) {
		for (const key in source) {
			const { optional, type, description, templateTags, tags } = source[
				key
			] as ObjectLiteralTypeMember;
			const resolvedType = resolveExpression(context, type);
			target[key] = {
				optional,
				type: resolvedType,
				description,
				templateTags,
				tags,
			};
		}
	}

	for (const h of heritage) {
		const resolved = resolveExpression(context, h);
		if (resolved.kind === 'object') {
			mergeMembers(object.members, resolved.members ?? {});
		}
	}

	for (const key in members) {
		const { optional, type, description, templateTags, tags } = members[
			key
		] as ObjectLiteralTypeMember;
		const resolvedType = resolveExpression(context, type);
		object.members[key] = {
			optional,
			type: resolvedType,
			description,
			templateTags,
			tags,
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
