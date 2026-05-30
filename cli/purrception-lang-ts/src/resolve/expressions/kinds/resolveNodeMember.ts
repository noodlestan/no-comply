import { type TypeExpressionNode, type TypeRef, isObjectLiteralTypeNode } from '../../../node';

export function resolveNodeMember(
	node: TypeExpressionNode,
	member: string,
): TypeExpressionNode | TypeRef | undefined {
	if (!isObjectLiteralTypeNode(node)) {
		return undefined;
	}

	const targetMember = node.members[member];

	if (!targetMember) {
		return undefined;
	}

	return targetMember.type;
}
