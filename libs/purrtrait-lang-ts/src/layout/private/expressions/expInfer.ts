import type { InferTypeNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-renderer';

import { identifierToken, keywordToken, spaceToken } from '../layout';

export function expInfer(_ctx: CodeLayoutContextValue, node: InferTypeNode): CodeLayoutNode[] {
	return [keywordToken('infer'), spaceToken(), identifierToken(node.name)];
}
