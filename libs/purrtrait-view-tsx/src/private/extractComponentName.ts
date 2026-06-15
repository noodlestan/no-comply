import ts from 'typescript';

export function extractComponentName(node: ts.JsxElement | ts.JsxSelfClosingElement): string {
	const tagName = ts.isJsxElement(node) ? node.openingElement.tagName : node.tagName;

	if (ts.isIdentifier(tagName)) {
		return tagName.text;
	}

	throw new Error('Unsupported component name shape');
}
