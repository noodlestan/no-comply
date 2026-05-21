import type { ObjectLiteralTypeMember, TypeExpressionNode, TypeRef } from '@purrception/lang-ts';
import ts from 'typescript';

import { extractDeclarationJsDoc } from '../../jsdoc';

import { extractTypeExpression } from './extractTypeExpression';

export function extractObjectLiteralTypeMember(
	element: ts.TypeElement,
): ObjectLiteralTypeMember | undefined {
	if (!ts.isPropertySignature(element) || !element.name) return;

	const nameNode = ts.getNameOfDeclaration(element);
	if (!nameNode) return;

	const typeNode = element.type;
	const type: TypeExpressionNode | TypeRef = typeNode ? extractTypeExpression(typeNode) : 'unknown';

	const { description, tags } = extractDeclarationJsDoc(element);
	const optional = Boolean(element.questionToken);

	return { type, optional, description, tags };
}
