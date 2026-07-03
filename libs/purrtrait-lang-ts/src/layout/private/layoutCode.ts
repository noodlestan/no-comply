import type { Declaration, TypeExpressionNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-renderer';

import type { CodeLayoutWithGenericParamsContextValue } from '../../contexts';

import { layoutDeclaration } from './layoutDeclaration';
import { layoutExpression } from './layoutExpression';

import { typeRefToken } from '.';

export function layoutCode(
	ctx: CodeLayoutContextValue | CodeLayoutWithGenericParamsContextValue,
	code: string | object,
): CodeLayoutNode[] {
	if (typeof code === 'string') {
		return [typeRefToken(ctx, code)];
	}
	if (!('at' in code)) {
		return layoutExpression(ctx, code as TypeExpressionNode);
	}
	if ('at' in code) {
		return layoutDeclaration(ctx, code as Declaration);
	}

	console.error(`Invalid code block:`, code);
	throw new Error(`Invalid code block.`);
}
