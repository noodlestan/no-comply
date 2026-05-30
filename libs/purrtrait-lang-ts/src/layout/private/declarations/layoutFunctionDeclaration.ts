import type { FunctionDeclaration } from '@purrception/lang-ts';
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
	if (declaration.type) {
		return [
			keywordToken('const'),
			spaceToken(),
			identifierToken(declaration.name),
			symbolToken(':'),
			spaceToken(),
			...layoutExpression(ctx, declaration.type),
		];
	}

	const genericCtx = createCodeLayoutWithGenericParamsContext(
		ctx,
		declaration.generic?.map(x => x.name) ?? [],
	);

	return [
		keywordToken('function'),
		spaceToken(),
		identifierToken(declaration.name),
		...layoutGenerics(ctx, declaration.generic),
		symbolToken('('),
		group(
			eachExpression(
				ctx,
				declaration.params,
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
		...layoutExpression(genericCtx, declaration.returns?.type || 'void'),
	];
}
