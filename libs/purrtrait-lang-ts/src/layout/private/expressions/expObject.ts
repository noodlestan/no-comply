import type { ObjectLiteralTypeNode } from '@purrception/lang-ts';
import type {
	CodeLayoutContextValue,
	CodeLayoutGroup,
	CodeLayoutNode,
} from '@purrtrait/code-layout';

import { block, group, identifierToken, spaceToken, symbolToken } from '../layout';
import { layoutExpression } from '../layoutExpression';
import { appendSemicolon } from '../utils';

export function expObject(
	ctx: CodeLayoutContextValue,
	node: ObjectLiteralTypeNode,
): CodeLayoutNode[] {
	const entries: CodeLayoutGroup[] = [];

	const members = Object.entries(node.members);

	for (const [key, member] of members) {
		entries.push(
			group([
				...(member.readonly ? [identifierToken('readonly'), spaceToken()] : []),
				identifierToken(key),
				...(member.optional ? [symbolToken('?')] : []),
				symbolToken(':'),
				spaceToken(),
				group(appendSemicolon(layoutExpression(ctx, member.type))),
			]),
		);
	}

	for (const signature of node.indexSignatures ?? []) {
		entries.push(
			group([
				...(signature.readonly ? [identifierToken('readonly'), spaceToken()] : []),
				symbolToken('['),
				identifierToken(signature.keyName),
				symbolToken(':'),
				spaceToken(),
				...layoutExpression(ctx, signature.keyType),
				symbolToken(']'),
				symbolToken(':'),
				spaceToken(),
				group(appendSemicolon(layoutExpression(ctx, signature.valueType))),
			]),
		);
	}

	for (const signature of node.mappedSignatures ?? []) {
		entries.push(
			group([
				...(signature.readonly ? [identifierToken('readonly'), spaceToken()] : []),
				symbolToken('['),
				identifierToken(signature.paramName),
				spaceToken(),
				identifierToken('in'),
				spaceToken(),
				...layoutExpression(ctx, signature.constraint),
				symbolToken(']'),
				...(signature.optional ? [symbolToken('?')] : []),
				symbolToken(':'),
				spaceToken(),
				group(appendSemicolon(layoutExpression(ctx, signature.valueType))),
			]),
		);
	}

	return [symbolToken('{'), spaceToken(), block(entries), spaceToken(), symbolToken('}')];
}
