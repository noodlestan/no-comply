import type { UnionTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-renderer';

import { group, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

export function expUnion(ctx: CodeLayoutContextValue, node: UnionTypeNode): CodeLayoutNode[] {
	return [
		group(
			eachExpression(
				ctx,
				node.entries,
				(ctx, entry) => layoutExpression(ctx, entry),
				() => [spaceToken(), symbolToken('|'), spaceToken()],
			),
		),
	];
}
