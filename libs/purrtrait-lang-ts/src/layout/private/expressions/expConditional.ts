import type { ConditionalTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function expConditional(
	ctx: CodeLayoutContextValue,
	node: ConditionalTypeNode,
): CodeLayoutNode[] {
	return [
		...layoutExpression(ctx, node.checkType),
		spaceToken(),
		keywordToken('extends'),
		spaceToken(),
		...layoutExpression(ctx, node.extendsType),
		spaceToken(),
		symbolToken('?'),
		spaceToken(),
		...layoutExpression(ctx, node.trueType),
		spaceToken(),
		symbolToken(':'),
		spaceToken(),
		...layoutExpression(ctx, node.falseType),
	];
}
