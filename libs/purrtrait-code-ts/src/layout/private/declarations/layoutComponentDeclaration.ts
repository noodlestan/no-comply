import type { ComponentDeclarationNode } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function layoutComponentDeclaration(
	ctx: CodeLayoutContextValue,
	node: ComponentDeclarationNode,
): CodeLayoutNode[] {
	return [
		keywordToken('function'),
		spaceToken(),
		identifierToken(node.name),
		symbolToken(':'),
		spaceToken(),
		keywordToken('Component'),
		symbolToken('<'),
		...(node.props ? layoutExpression(ctx, node.props) : []),
		symbolToken('>'),
	];
}
