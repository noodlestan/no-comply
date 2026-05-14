import type { TypeRef, TypeRefObject } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { identifierToken, spaceToken, symbolToken, typeRefToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

export function expTypeRef(ctx: CodeLayoutContextValue, node: TypeRef): CodeLayoutNode[] {
	const str = typeof node === 'string' ? node : undefined;
	if (str) {
		return [{ type: 'token', kind: 'type-ref', value: str }];
	}
	const ref = node as TypeRefObject;
	const nodes: CodeLayoutNode[] = [typeRefToken(ctx, ref.type)];

	if (ref.params) {
		nodes.push(
			symbolToken('<'),
			...eachExpression(
				ctx,
				ref.params,
				(ctx, param) => layoutExpression(ctx, param),
				() => [symbolToken(','), spaceToken()],
			),
			symbolToken('>'),
		);
	}

	if (ref.member) {
		nodes.push(
			symbolToken('['),
			symbolToken("'"),
			identifierToken(ref.member),
			symbolToken("'"),
			symbolToken(']'),
		);
	}

	return nodes;
}
