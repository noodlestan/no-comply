import type { ComponentData } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function layoutComponentNode(
	ctx: CodeLayoutContextValue,
	node: ComponentData,
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
