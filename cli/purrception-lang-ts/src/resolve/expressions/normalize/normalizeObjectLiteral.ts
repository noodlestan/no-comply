import {
	type ObjectLiteralTypeNode,
	type TypeExpressionNode,
	type TypeRef,
	isMappedTypeNode,
	isObjectLiteralTypeNode,
} from '../../../node';

export function normalizeObjectLiteral(
	exp: TypeExpressionNode | TypeRef,
): ObjectLiteralTypeNode | undefined {
	if (isObjectLiteralTypeNode(exp)) {
		return exp;
	}

	if (isMappedTypeNode(exp)) {
		return {
			kind: 'object',
			members: {},
			mappedSignatures: [
				{
					paramName: exp.param,
					constraint: exp.constraint,
					valueType: exp.valueType,
					optional: exp.optional,
					readonly: exp.readonly,
				},
			],
		};
	}

	console.warn(`Unsupported object literal candidate:`, exp);
	return {
		kind: 'object',
		members: {},
	};
}
