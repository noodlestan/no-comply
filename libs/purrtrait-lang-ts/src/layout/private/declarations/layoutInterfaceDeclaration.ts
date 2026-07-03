import type { InterfaceDeclaration } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-renderer';

import { createCodeLayoutWithGenericParamsContext } from '../../../contexts';
import { layoutGenerics } from '../generics';
import { block, group, identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { appendSemicolon, eachExpression } from '../utils';

export function layoutInterfaceDeclaration(
	ctx: CodeLayoutContextValue,
	declaration: InterfaceDeclaration,
): CodeLayoutNode[] {
	const genericCtx = createCodeLayoutWithGenericParamsContext(
		ctx,
		declaration.generic?.map(x => x.name) ?? [],
	);

	return [
		keywordToken('interface'),
		spaceToken(),
		identifierToken(declaration.name),
		...layoutGenerics(ctx, declaration.generic),
		...(declaration.heritage?.length ? [spaceToken(), keywordToken('extends'), spaceToken()] : []),
		...eachExpression(
			genericCtx,
			declaration.heritage,
			(genericCtx, heritage) => layoutExpression(genericCtx, heritage),
			() => [symbolToken(','), spaceToken()],
		),
		...(declaration.heritage ? [spaceToken()] : []),
		symbolToken('{'),
		spaceToken(),
		block(
			Object.entries(declaration.members).map(([key, member], i, arr) => {
				return group([
					identifierToken(key),
					...(member.optional ? [symbolToken('?')] : []),
					symbolToken(':'),
					spaceToken(),
					group(appendSemicolon(layoutExpression(genericCtx, member.type))),
					...(i < arr.length - 1 ? [spaceToken()] : []),
				]);
			}),
		),
		spaceToken(),
		symbolToken('}'),
	];
}
