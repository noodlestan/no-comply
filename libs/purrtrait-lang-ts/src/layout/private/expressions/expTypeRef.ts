import type { TypeRefNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { identifierToken, spaceToken, symbolToken, typeRefToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

export function expTypeRef(ctx: CodeLayoutContextValue, node: TypeRefNode): CodeLayoutNode[] {
	const nodes: CodeLayoutNode[] = [typeRefToken(ctx, node.ref)];

	if (node.params) {
		nodes.push(
			symbolToken('<'),
			...eachExpression(
				ctx,
				node.params,
				(ctx, param) => layoutExpression(ctx, param),
				() => [symbolToken(','), spaceToken()],
			),
			symbolToken('>'),
		);
	}

	if (node.member) {
		nodes.push(
			symbolToken('['),
			symbolToken("'"),
			identifierToken(node.member),
			symbolToken("'"),
			symbolToken(']'),
		);
	}

	return nodes;
}
