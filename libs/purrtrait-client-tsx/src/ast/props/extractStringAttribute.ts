import type ts from 'typescript';

import { type XPressValue, createXPressValueExpression } from '../../values';
import { printNode } from '../printNode';

export function extractStringAttribute(
	sourceFile: ts.SourceFile,
	node: ts.StringLiteral,
): XPressValue {
	return createXPressValueExpression(node, printNode(sourceFile, node));
}
