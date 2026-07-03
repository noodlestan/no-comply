import type { OperatorTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-renderer';

import { keywordToken, spaceToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function expOperator(ctx: CodeLayoutContextValue, node: OperatorTypeNode): CodeLayoutNode[] {
	return [keywordToken(node.operator), spaceToken(), ...layoutExpression(ctx, node.operand)];
}
