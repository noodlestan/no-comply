import type { PrimitiveNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-renderer';

export function expPrimitive(ctx: CodeLayoutContextValue, node: PrimitiveNode): CodeLayoutNode[] {
	return [{ type: 'token', kind: 'identifier', value: node.primitive }];
}
