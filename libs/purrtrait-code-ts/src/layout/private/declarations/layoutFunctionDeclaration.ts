import type { FunctionDeclaration } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { createCodeLayoutWithGenericParamsContext } from '../../../contexts';
import { layoutGenerics } from '../generics';
import { group, identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

export function layoutFunctionDeclaration(
	ctx: CodeLayoutContextValue,
	node: FunctionDeclaration,
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

	const genericCtx = createCodeLayoutWithGenericParamsContext(
		ctx,
		node.generic?.map(x => x.name) ?? [],
	);

	return [
		keywordToken('function'),
		spaceToken(),
		identifierToken(node.name),
		...layoutGenerics(ctx, node.generic),
		symbolToken('('),
		group(
			eachExpression(
				ctx,
				node.params,
				(ctx, item) => [
					identifierToken(item.name),
					symbolToken(':'),
					spaceToken(),
					...layoutExpression(genericCtx, item.type),
				],
				() => [symbolToken(','), spaceToken()],
			),
		),
		symbolToken(')'),
		symbolToken(':'),
		spaceToken(),
		...layoutExpression(genericCtx, node.returns?.type || 'void'),
	];
}
