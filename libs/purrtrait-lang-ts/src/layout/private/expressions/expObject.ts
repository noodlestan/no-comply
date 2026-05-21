import type { ObjectLiteralTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { block, group, identifierToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { appendSemicolon } from '../utils';

export function expObject(
	ctx: CodeLayoutContextValue,
	node: ObjectLiteralTypeNode,
): CodeLayoutNode[] {
	return [
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
	] as CodeLayoutNode[];
}
