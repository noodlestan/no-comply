import type { TupleTypeElement, TupleTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-renderer';

import { group, identifierToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

function tupleElement(ctx: CodeLayoutContextValue, element: TupleTypeElement): CodeLayoutNode[] {
	if ('kind' in element) {
		return layoutExpression(ctx, element);
	}

	const tokens: CodeLayoutNode[] = [
		identifierToken(element.name),
		element.optional ? symbolToken('?') : null,
		symbolToken(':'),
		symbolToken(' '),
		...layoutExpression(ctx, element.type),
	].filter(Boolean) as CodeLayoutNode[];
	return tokens;
}

export function expTuple(ctx: CodeLayoutContextValue, node: TupleTypeNode): CodeLayoutNode[] {
	return [
		group([
			symbolToken('['),
			...eachExpression(ctx, node.elements, tupleElement, () => [
				symbolToken(','),
				symbolToken(' '),
			]),
			symbolToken(']'),
		]),
	];
}
