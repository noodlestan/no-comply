import ts from 'typescript';

import { extractMemberJsDocDescription } from '../../jsdoc';
import type {
	ObjectLiteralTypeMember,
	TypeExpressionData,
	TypeRef,
	TypeRefObject,
} from '../../types';

import { extractTypeExpression } from './extractTypeExpression';

function normalizeTypeRef(type: TypeExpressionData | TypeRef): TypeExpressionData | TypeRefObject {
	if (typeof type === 'string') {
		return { type };
	}
	return type;
}

export function extractObjectLiteralTypeMember(
	member: ts.TypeElement,
): ObjectLiteralTypeMember | undefined {
	if (!ts.isPropertySignature(member) || !member.name) return;

	const nameNode = ts.getNameOfDeclaration(member);
	if (!nameNode) return;

	const rawType: TypeExpressionData | TypeRef = member.type
		? extractTypeExpression(member.type)
		: 'any';

	const type = normalizeTypeRef(rawType);
	const description = extractMemberJsDocDescription(member);
	const optional = Boolean(member.questionToken);

	return { ...type, optional, description };
}
