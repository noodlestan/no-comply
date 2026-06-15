import { type TypescriptNode, unwrapExtractableNode } from '@purrtrait/client-tsx';
import ts from 'typescript';

import { createTSXViewTargetPlaceholder } from './createTSXViewTargetPlaceholder';

export function replaceTarget(
	root: ts.Node,
	target: ts.JsxElement | ts.JsxSelfClosingElement,
): TypescriptNode {
	function visit(n: ts.Node): ts.Node {
		if (n === target) {
			return createTSXViewTargetPlaceholder();
		}

		return ts.visitEachChild(n, visit, undefined);
	}

	const result = ts.visitNode(root, visit);

	return unwrapExtractableNode(result);
}
