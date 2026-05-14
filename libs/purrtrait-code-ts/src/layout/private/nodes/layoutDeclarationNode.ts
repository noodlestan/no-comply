import type { TypeDeclarationData } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function layoutDeclarationNode(
	ctx: CodeLayoutContextValue,
	node: TypeDeclarationData,
): CodeLayoutNode[] {
	return [
		keywordToken('type'),
		spaceToken(),
		identifierToken(node.name),
		spaceToken(),
		symbolToken('='),
		spaceToken(),
		...layoutExpression(ctx, node),
	] as CodeLayoutNode[];
}
