import type { TypeExpressionGeneric } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

export function layoutGenerics(
	ctx: CodeLayoutContextValue,
	generic?: TypeExpressionGeneric[],
): CodeLayoutNode[] {
	if (!generic?.length) {
		return [];
	}

	return [
		symbolToken('<'),

		...eachExpression(
			ctx,
			generic,
			(_ctx, item) => [
				identifierToken(item.name),

				...(item.constraint
					? [
							spaceToken(),
							keywordToken('extends'),
							spaceToken(),
							...layoutExpression(ctx, item.constraint),
						]
					: []),

				...(item.default
					? [spaceToken(), symbolToken('='), spaceToken(), ...layoutExpression(ctx, item.default)]
					: []),
			],
			() => [symbolToken(','), spaceToken()],
		),

		symbolToken('>'),
	];
}
