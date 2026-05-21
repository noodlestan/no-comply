import type { IntersectionTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { group, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

export function expIntersection(
	ctx: CodeLayoutContextValue,
	node: IntersectionTypeNode,
): CodeLayoutNode[] {
	return [
		group(
			eachExpression(
				ctx,
				node.entries,
				(ctx, entry) => layoutExpression(ctx, entry),
				() => [spaceToken(), symbolToken('&'), spaceToken()],
			),
		),
	];
}
