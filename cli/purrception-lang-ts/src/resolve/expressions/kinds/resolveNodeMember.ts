import { type TypeExpressionNode, isObjectLiteralTypeNode } from '../../../node';

export function resolveNodeMember(
	node: TypeExpressionNode,
	member: string,
): TypeExpressionNode | undefined {
	if (!isObjectLiteralTypeNode(node)) {
		return undefined;
	}

	const targetMember = node.members[member];

	if (!targetMember) {
		return undefined;
	}

	if (typeof targetMember.type === 'object') {
		return { ...targetMember.type, resolved: node.resolved };
	}

	return targetMember.type;
}
