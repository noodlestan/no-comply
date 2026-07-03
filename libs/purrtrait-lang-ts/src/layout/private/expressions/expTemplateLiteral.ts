import type { TemplateLiteralTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-renderer';

import { stringToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function expTemplateLiteral(
	ctx: CodeLayoutContextValue,
	node: TemplateLiteralTypeNode,
): CodeLayoutNode[] {
	return [
		symbolToken('`'),
		stringToken(node.head),
		...node.spans.flatMap(span => [
			symbolToken('${'),
			...layoutExpression(ctx, span.type),
			symbolToken('}'),
			stringToken(span.text),
		]),
		symbolToken('`'),
	];
}
