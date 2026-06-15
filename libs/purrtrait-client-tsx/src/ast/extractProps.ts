import ts from 'typescript';

import type { XPressValue } from '../values';

import {
	extractAttributeName,
	extractBooleanAttribute,
	extractChildren,
	extractExpressionAttribute,
	extractStringAttribute,
} from './props';

export function extractProps(
	node: ts.JsxElement | ts.JsxSelfClosingElement,
	sourceFile: ts.SourceFile,
	ignore?: (attr: ts.JsxAttribute) => boolean,
): Record<string, XPressValue> {
	const result: Record<string, XPressValue> = {};

	const attrs = ts.isJsxElement(node)
		? node.openingElement.attributes.properties
		: node.attributes.properties;

	for (const attr of attrs) {
		if (!ts.isJsxAttribute(attr) || (ignore && ignore(attr))) {
			continue;
		}

		const name = extractAttributeName(attr);

		if (!attr.initializer) {
			result[name] = extractBooleanAttribute();
			continue;
		}

		if (ts.isStringLiteral(attr.initializer)) {
			result[name] = extractStringAttribute(sourceFile, attr.initializer);
			continue;
		}

		if (ts.isJsxExpression(attr.initializer) && attr.initializer.expression) {
			result[name] = extractExpressionAttribute(sourceFile, attr.initializer.expression);
		}
	}

	if (ts.isJsxElement(node)) {
		const children = extractChildren(sourceFile, node);

		if (children) {
			// eslint-disable-next-line dot-notation
			result['children'] = children;
		}
	}

	return result;
}
