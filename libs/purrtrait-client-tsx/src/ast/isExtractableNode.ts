import ts from 'typescript';

import type { XTractableNode } from './types';

export function isExtractableNode(node: ts.Node): node is XTractableNode {
	return ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node) || ts.isJsxFragment(node);
}
