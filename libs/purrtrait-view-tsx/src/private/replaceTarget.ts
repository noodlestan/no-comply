import { type XTractableNode, unwrapExtractableNode } from '@purrtrait/client-tsx';
import ts from 'typescript';

import { createXPressTargetPlaceholderNode } from './createXPressTargetPlaceholderNode';

export function replaceTarget(
	root: ts.Node,
	target: ts.JsxElement | ts.JsxSelfClosingElement,
): XTractableNode {
	function visit(n: ts.Node): ts.Node {
		if (n === target) {
			return createXPressTargetPlaceholderNode();
		}

		return ts.visitEachChild(n, visit, undefined);
	}

	const result = ts.visitNode(root, visit);

	return unwrapExtractableNode(result);
}
