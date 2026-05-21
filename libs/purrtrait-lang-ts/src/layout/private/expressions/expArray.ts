import type { ArrayTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function expArray(ctx: CodeLayoutContextValue, node: ArrayTypeNode): CodeLayoutNode[] {
	return [...layoutExpression(ctx, node.elements), symbolToken('[]')];
}
