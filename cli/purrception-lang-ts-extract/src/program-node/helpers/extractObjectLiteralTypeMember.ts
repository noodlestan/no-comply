import type { ObjectLiteralTypeMember } from '@purrception/lang-ts';
import ts from 'typescript';

import { extractDeclarationJsDoc } from '../../jsdoc';

import { extractTypeExpression } from './extractTypeExpression';

export function extractObjectLiteralTypeMember(
	element: ts.TypeElement,
): { name: string; member: ObjectLiteralTypeMember } | undefined {
	const { description, tags } = extractDeclarationJsDoc(element);

	if (ts.isPropertySignature(element)) {
		return {
			name: element.name.getText(),
			member: {
				optional: Boolean(element.questionToken),
				type: element.type ? extractTypeExpression(element.type) : 'unknown',
				description,
				tags,
			},
		};
	}

	if (ts.isMethodSignature(element) && element.type) {
		return {
			name: element.name.getText(),
			member: {
				optional: Boolean(element.questionToken),
				type: extractTypeExpression(element.type),
				description,
				tags,
			},
		};
	}

	if (ts.isIndexSignatureDeclaration(element)) {
		const name = element.parameters[0]?.name as { text: 'string' };
		return {
			name: `[${name?.text || '??'}]`,
			member: {
				type: extractTypeExpression(element.type),
				description,
				tags,
			},
		};
	}

	if (ts.isCallSignatureDeclaration(element)) {
		return {
			name: element.name?.getText() || '??',
			member: {
				type: element.type ? extractTypeExpression(element.type) : 'unknown',
				description,
				tags,
			},
		};
	}
}
