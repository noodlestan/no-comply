import type { TypeExpressionDeclaration } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-renderer';

import { createCodeLayoutWithGenericParamsContext } from '../../../contexts';
import { layoutGenerics } from '../generics';
import { identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function layoutTypeDeclaration(
	ctx: CodeLayoutContextValue,
	declaration: TypeExpressionDeclaration,
): CodeLayoutNode[] {
	const genericCtx = createCodeLayoutWithGenericParamsContext(
		ctx,
		declaration.node.generic?.map(x => x.name) ?? [],
	);

	return [
		keywordToken('type'),
		spaceToken(),
		identifierToken(declaration.name),
		...layoutGenerics(ctx, declaration.node.generic),
		spaceToken(),
		symbolToken('='),
		spaceToken(),
		...layoutExpression(genericCtx, declaration.node),
	] as CodeLayoutNode[];
}
