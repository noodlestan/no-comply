import type { LiteralTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-renderer';

import { literalToken } from '../layout';

export function expLiteral(_ctx: CodeLayoutContextValue, node: LiteralTypeNode): CodeLayoutNode[] {
	return [literalToken(node.value)];
}
