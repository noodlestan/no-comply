import type { TypeExpressionDeclaration } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function layoutTypeDeclaration(
	ctx: CodeLayoutContextValue,
	node: TypeExpressionDeclaration,
): CodeLayoutNode[] {
	return [
		keywordToken('type'),
		spaceToken(),
		identifierToken(node.name),
		spaceToken(),
		symbolToken('='),
		spaceToken(),
		...layoutExpression(ctx, node.node),
	] as CodeLayoutNode[];
}
