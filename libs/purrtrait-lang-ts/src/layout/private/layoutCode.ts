import type { Declaration, TypeExpressionNode, TypeRef } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import type { CodeLayoutWithGenericParamsContextValue } from '../../contexts';

import { layoutDeclaration } from './layoutDeclaration';
import { layoutExpression } from './layoutExpression';

export function layoutCode(
	ctx: CodeLayoutContextValue | CodeLayoutWithGenericParamsContextValue,
	code: string | object,
): CodeLayoutNode[] {
	if (typeof code === 'string' || !('at' in code)) {
		return layoutExpression(ctx, code as TypeRef | TypeExpressionNode);
	}
	if ('at' in code) {
		return layoutDeclaration(ctx, code as Declaration);
	}

	console.error(`Invalid code block:`, code);
	throw new Error(`Invalid code block.`);
}
