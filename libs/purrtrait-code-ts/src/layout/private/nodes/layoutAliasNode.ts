import type { TypeAliasData } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import {
	group,
	identifierToken,
	keywordToken,
	spaceToken,
	symbolToken,
	typeRefToken,
} from '../layout';

export function layoutAliasNode(
	ctx: CodeLayoutContextValue,
	node: TypeAliasData,
): CodeLayoutNode[] {
	return [
		keywordToken('type'),
		spaceToken(),
		identifierToken(node.name),
		spaceToken(),
		symbolToken('='),
		spaceToken(),
		group([typeRefToken(ctx, String(node.target) ?? 'unknown')]),
	] as CodeLayoutNode[];
}
