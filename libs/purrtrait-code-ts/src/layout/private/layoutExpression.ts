import type { TypeExpressionNode, TypeRef } from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import {
	expArray,
	expConditional,
	expInfer,
	expIntersection,
	expLiteral,
	expMapped,
	expObject,
	expOmit,
	expOperator,
	expPick,
	expTemplateLiteral,
	expTuple,
	expUnion,
} from './expressions';
import { expTypeRef } from './expressions/expTypeRef';
import { typeRefToken } from './layout';

export function layoutExpression(
	ctx: CodeLayoutContextValue,
	exp: TypeRef | TypeExpressionNode,
): CodeLayoutNode[] {
	if (typeof exp === 'string') {
		return [typeRefToken(ctx, exp)];
	}

	if ('type' in exp) {
		return expTypeRef(ctx, exp);
	}

	switch (exp.kind) {
		case 'object':
			return expObject(ctx, exp);
		case 'intersection':
			return expIntersection(ctx, exp);
		case 'union':
			return expUnion(ctx, exp);
		case 'pick':
			return expPick(ctx, exp);
		case 'omit':
			return expOmit(ctx, exp);
		case 'literal':
			return expLiteral(ctx, exp);
		case 'array':
			return expArray(ctx, exp);
		case 'tuple':
			return expTuple(ctx, exp);
		case 'template-literal':
			return expTemplateLiteral(ctx, exp);
		case 'operator':
			return expOperator(ctx, exp);
		case 'mapped':
			return expMapped(ctx, exp);
		case 'conditional':
			return expConditional(ctx, exp);
		case 'infer':
			return expInfer(ctx, exp);
	}

	return [{ type: 'token', kind: 'identifier', value: 'OUCH!' }];
}
