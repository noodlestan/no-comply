import {
	type TypeExpressionNode,
	type TypeRef,
	type UnionTypeNode,
	isLiteralTypeNode,
	isUnionTypeNode,
} from '../../../node';

export function normalizeUnion(exp: TypeExpressionNode | TypeRef): UnionTypeNode {
	if (isUnionTypeNode(exp)) {
		return exp;
	}

	if (isLiteralTypeNode(exp)) {
		return {
			kind: 'union',
			entries: [exp],
		};
	}

	console.warn(`Unsupported union type node:`, exp);
	return {
		kind: 'union',
		entries: [],
	};
}
