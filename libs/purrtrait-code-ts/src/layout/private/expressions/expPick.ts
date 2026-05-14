import type { PickTypeNode } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { keywordToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';

export function expPick(ctx: CodeLayoutContextValue, node: PickTypeNode): CodeLayoutNode[] {
	return [
		keywordToken('Pick'),
		symbolToken('<'),
		...layoutExpression(ctx, node.source),
		symbolToken(','),
		spaceToken(),
		...layoutExpression(ctx, node.members),
		symbolToken('>'),
	] as CodeLayoutNode[];
}
