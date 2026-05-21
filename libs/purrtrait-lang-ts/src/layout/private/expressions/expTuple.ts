import type { NamedTupleTypeElement, TupleTypeElement, TupleTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { group, identifierToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { eachExpression } from '../utils';

function tupleElement(ctx: CodeLayoutContextValue, element: TupleTypeElement): CodeLayoutNode[] {
	if (typeof element === 'object' && 'name' in element) {
		const el = element as NamedTupleTypeElement;
		const tokens: CodeLayoutNode[] = [
			identifierToken(el.name),
			el.optional ? symbolToken('?') : null,
			symbolToken(':'),
			symbolToken(' '),
			...layoutExpression(ctx, el.type),
		].filter(Boolean) as CodeLayoutNode[];
		return tokens;
	}

	return layoutExpression(ctx, element);
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
