import type { InterfaceDeclarationNode } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { block, group, identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { appendSemicolon, eachExpression } from '../utils';

export function layoutInterfaceDeclaration(
	ctx: CodeLayoutContextValue,
	declaration: InterfaceDeclarationNode,
): CodeLayoutNode[] {
	return [
		keywordToken('interface'),
		spaceToken(),
		identifierToken(declaration.name),
		// ...(node.generic ? typeParams(ctx, node.generic) : []),
		...(declaration.heritage?.length ? [spaceToken(), keywordToken('extends'), spaceToken()] : []),
		...eachExpression(
			ctx,
			declaration.heritage,
			(ctx, heritage) => layoutExpression(ctx, heritage),
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
					group(appendSemicolon(layoutExpression(ctx, member.type))),
					...(i < arr.length - 1 ? [spaceToken()] : []),
				]);
			}),
		),
		spaceToken(),
		symbolToken('}'),
	];
}
