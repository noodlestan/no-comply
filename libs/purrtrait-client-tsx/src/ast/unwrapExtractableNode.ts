import ts from 'typescript';

import { isExtractableNode } from './isExtractableNode';
import { type XTractableNode } from './types';

export function unwrapExtractableNode(node: ts.Node): XTractableNode {
	if (!ts.isSourceFile(node)) {
		if (!isExtractableNode(node)) {
			throw new Error('Expected extractable JSX node');
		}

		return node;
	}

	const child = node.statements[0];

	if (!child) {
		throw new Error('Expected source file to contain a JSX root');
	}

	if (ts.isExpressionStatement(child) && isExtractableNode(child.expression)) {
		return child.expression;
	}

	throw new Error('Expected source file root expression to be extractable JSX');
}
