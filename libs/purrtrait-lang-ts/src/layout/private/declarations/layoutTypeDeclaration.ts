import type { TypeExpressionDeclaration } from '@purrception/lang-ts';
import type { CodeLayoutNode } from '@purrtrait/code-renderer';

import {
	type LangTsLayoutContext,
	createLangTsLayoutContextWithGenericParams,
} from '../../../private';
import { layoutGenerics } from '../generics';
import { identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function layoutTypeDeclaration(
	context: LangTsLayoutContext,
	declaration: TypeExpressionDeclaration,
): CodeLayoutNode[] {
	const genericCtx = createLangTsLayoutContextWithGenericParams(
		context,
		declaration.node.generic?.map(x => x.name) ?? [],
	);

	return [
		keywordToken('type'),
		spaceToken(),
		identifierToken(declaration.name),
		...layoutGenerics(context, declaration.node.generic),
		spaceToken(),
		symbolToken('='),
		spaceToken(),
		...layoutExpression(genericCtx, declaration.node),
	] as CodeLayoutNode[];
}
