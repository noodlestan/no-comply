import type { AliasDeclaration } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import {
	group,
	identifierToken,
	keywordToken,
	spaceToken,
	symbolToken,
	typeRefToken,
} from '../layout';

export function layoutAliasDeclaration(
	ctx: CodeLayoutContextValue,
	node: AliasDeclaration,
): CodeLayoutNode[] {
	const target = typeof node.target === 'string' ? node.target : node.target.type;
	return [
		keywordToken('type'),
		spaceToken(),
		identifierToken(node.name),
		spaceToken(),
		symbolToken('='),
		spaceToken(),
		group([typeRefToken(ctx, String(target) ?? 'unknown')]),
	] as CodeLayoutNode[];
}
