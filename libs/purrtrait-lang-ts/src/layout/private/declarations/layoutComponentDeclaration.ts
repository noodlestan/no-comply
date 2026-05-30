import type { ComponentDeclaration } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function layoutComponentDeclaration(
	ctx: CodeLayoutContextValue,
	declaration: ComponentDeclaration,
): CodeLayoutNode[] {
	return [
		keywordToken('function'),
		spaceToken(),
		identifierToken(declaration.name),
		symbolToken(':'),
		spaceToken(),
		keywordToken('Component'),
		symbolToken('<'),
		...(declaration.props ? layoutExpression(ctx, declaration.props) : []),
		symbolToken('>'),
	];
}
