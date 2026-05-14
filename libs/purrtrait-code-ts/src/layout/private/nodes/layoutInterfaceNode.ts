import type { InterfaceTypeNode, TypeDeclarationData } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { block, group, identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { appendSemicolon, eachExpression } from '../utils';

export function layoutInterfaceNode(
	ctx: CodeLayoutContextValue,
	node: TypeDeclarationData<InterfaceTypeNode>,
): CodeLayoutNode[] {
	return [
		keywordToken('interface'),
		spaceToken(),
		identifierToken(node.name),
		// ...(node.generic ? typeParams(ctx, node.generic) : []),
		...(node.heritage?.length ? [spaceToken(), keywordToken('extends'), spaceToken()] : []),
		...eachExpression(
			ctx,
			node.heritage,
			(ctx, heritage) => layoutExpression(ctx, heritage),
			() => [symbolToken(','), spaceToken()],
		),
		...(node.heritage ? [spaceToken()] : []),
		symbolToken('{'),
		spaceToken(),
		block(
			Object.entries(node.members).map(([key, member], i, arr) => {
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
