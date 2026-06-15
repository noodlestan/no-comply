import ts from 'typescript';

import { type XPressValue, createXPressValueJsx } from '../../values';
import { printNode } from '../printNode';

export function extractChildren(
	sourceFile: ts.SourceFile,
	node: ts.JsxElement,
): XPressValue | undefined {
	const children = node.children
		.filter(c => !ts.isJsxText(c) || c.text.trim().length > 0)
		.map(c => printNode(sourceFile, c))
		.join('');

	if (!children.trim().length) {
		return undefined;
	}

	const fragment = ts.factory.createJsxFragment(
		ts.factory.createJsxOpeningFragment(),
		node.children,
		ts.factory.createJsxJsxClosingFragment(),
	);

	return createXPressValueJsx(fragment, `<>${children}</>`);
}
