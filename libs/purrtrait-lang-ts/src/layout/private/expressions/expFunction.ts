import { type FunctionTypeNode, createPrimitiveNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { layoutGenerics } from '../generics';
import { group, identifierToken, keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

export function expFunction(ctx: CodeLayoutContextValue, node: FunctionTypeNode): CodeLayoutNode[] {
	return [
		...layoutGenerics(ctx, node.generic),

		group([
			symbolToken('('),

			...eachExpression(
				ctx,
				node.params ?? [],
				(_ctx, param) => [
					identifierToken(param.name),
					...(param.optional ? [symbolToken('?')] : []),
					symbolToken(':'),
					spaceToken(),
					...layoutExpression(ctx, param.type),
				],
				() => [symbolToken(','), spaceToken()],
			),

			symbolToken(')'),
		]),

		spaceToken(),
		symbolToken('=>'),
		spaceToken(),

		...(node.returns?.asserts
			? [
					keywordToken('asserts'),
					spaceToken(),
					identifierToken(node.returns.asserts.parameter),

					...(node.returns.asserts.type
						? [
								spaceToken(),
								keywordToken('is'),
								spaceToken(),
								...layoutExpression(ctx, node.returns.asserts.type),
							]
						: []),
				]
			: layoutExpression(ctx, node.returns ? node.returns.type : createPrimitiveNode('void'))),
	];
}
