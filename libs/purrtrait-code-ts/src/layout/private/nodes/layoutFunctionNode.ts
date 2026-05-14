import type { FunctionData } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { group, identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

export function layoutFunctionNode(
	ctx: CodeLayoutContextValue,
	node: FunctionData,
): CodeLayoutNode[] {
	if (node.type) {
		return [
			keywordToken('const'),
			spaceToken(),
			identifierToken(node.name),
			symbolToken(':'),
			spaceToken(),
			...layoutExpression(ctx, node.type),
		];
	}

	return [
		keywordToken('function'),
		spaceToken(),
		identifierToken(node.name),
		symbolToken('('),
		group(
			eachExpression(
				ctx,
				node.params,
				(ctx, item) => [
					identifierToken(item.name),
					symbolToken(':'),
					spaceToken(),
					...layoutExpression(ctx, item.type),
				],
				() => [symbolToken(','), spaceToken()],
			),
		),
		symbolToken(')'),
		symbolToken(':'),
		spaceToken(),
		...layoutExpression(ctx, node.returns?.type || 'void'),
	];
}
