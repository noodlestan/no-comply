import ts from 'typescript';

import { extractDeclarationJsDoc } from '../../jsdoc';
import type { ObjectLiteralTypeMember, TypeExpressionData, TypeRef } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';
import { isTypeRef } from './isTypeRef';
import { normalizeTypeRefObject } from './normalizeTypeRefObject';

export function extractObjectLiteralTypeMember(
	member: ts.TypeElement,
): ObjectLiteralTypeMember | undefined {
	if (!ts.isPropertySignature(member) || !member.name) {
		return;
	}

	const nameNode = ts.getNameOfDeclaration(member);
	if (!nameNode) {
		return;
	}

	const rawType: TypeExpressionData | TypeRef = member.type
		? extractTypeExpression(member.type)
		: 'unknown';

	const type = isTypeRef(rawType) ? normalizeTypeRefObject(rawType) : rawType;
	const { description, tags } = extractDeclarationJsDoc(member);
	const optional = Boolean(member.questionToken);

	return { ...type, optional, description, tags };
}
