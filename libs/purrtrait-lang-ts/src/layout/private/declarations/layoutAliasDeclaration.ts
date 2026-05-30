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
	declaration: AliasDeclaration,
): CodeLayoutNode[] {
	const target =
		typeof declaration.target === 'string' ? declaration.target : declaration.target.type;
	return [
		keywordToken('type'),
		spaceToken(),
		identifierToken(declaration.name),
		spaceToken(),
		symbolToken('='),
		spaceToken(),
		group([typeRefToken(ctx, String(target) ?? 'unknown')]),
	] as CodeLayoutNode[];
}
