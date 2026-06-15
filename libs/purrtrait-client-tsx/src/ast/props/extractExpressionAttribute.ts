import ts from 'typescript';

import {
	type XPressValue,
	createXPressValueExpression,
	createXPressValueHandler,
} from '../../values';
import { printNode } from '../printNode';

export function extractExpressionAttribute(
	sourceFile: ts.SourceFile,
	expr: ts.Expression,
): XPressValue {
	if (ts.isArrowFunction(expr) || ts.isFunctionExpression(expr)) {
		return createXPressValueHandler(expr, printNode(sourceFile, expr));
	}

	return createXPressValueExpression(expr, printNode(sourceFile, expr));
}
