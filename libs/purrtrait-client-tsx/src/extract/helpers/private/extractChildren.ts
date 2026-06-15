import ts from 'typescript';

import { type TSXNode, createTSXElementNode } from '../../../nodes';
import { printNode } from '../printNode';

export function extractChildren(
	sourceFile: ts.SourceFile,
	node: ts.JsxElement | ts.JsxSelfClosingElement,
): TSXNode | undefined {
	if (ts.isJsxSelfClosingElement(node) || !node.children?.length) {
		return undefined;
	}

	const fragment = ts.factory.createJsxFragment(
		ts.factory.createJsxOpeningFragment(),
		node.children,
		ts.factory.createJsxJsxClosingFragment(),
	);

	const children = node.children
		.filter(c => !ts.isJsxText(c) || c.text.trim().length > 0)
		.map(c => printNode(sourceFile, c))
		.join('');

	return createTSXElementNode(fragment, `<>${children}</>`);
}
