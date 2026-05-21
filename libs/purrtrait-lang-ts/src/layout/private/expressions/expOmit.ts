import type { OmitTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function expOmit(ctx: CodeLayoutContextValue, node: OmitTypeNode): CodeLayoutNode[] {
	return [
		keywordToken('Omit'),
		symbolToken('<'),
		...layoutExpression(ctx, node.source),
		symbolToken(','),
		spaceToken(),
		...layoutExpression(ctx, node.members),
		symbolToken('>'),
	] as CodeLayoutNode[];
}
