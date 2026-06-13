import {
	type FunctionDeclaration,
	type FunctionTypeReturns,
	createPrimitiveNode,
	isFunctionTypeNode,
} from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { createCodeLayoutWithGenericParamsContext } from '../../../contexts';
import { layoutGenerics } from '../generics';
import { group, identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

export function layoutFunctionDeclaration(
	ctx: CodeLayoutContextValue,
	declaration: FunctionDeclaration,
): CodeLayoutNode[] {
	const node = declaration.node;
	if (!isFunctionTypeNode(node)) {
		return [
			keywordToken('const'),
			spaceToken(),
			identifierToken(declaration.name),
			symbolToken(':'),
			spaceToken(),
			...layoutExpression(ctx, node),
		];
	}

	const genericCtx = createCodeLayoutWithGenericParamsContext(
		ctx,
		node.generic?.map(x => x.name) ?? [],
	);

	const returns = (node.returns as FunctionTypeReturns) || createPrimitiveNode('void');

	return [
		keywordToken('function'),
		spaceToken(),
		identifierToken(declaration.name),
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
		...layoutExpression(genericCtx, returns.type),
	];
}
