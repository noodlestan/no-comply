import type { TypeExpressionNode } from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import type { CodeLayoutWithGenericParamsContextValue } from '../../contexts';

import {
	expArray,
	expConditional,
	expFunction,
	expInfer,
	expIntersection,
	expLiteral,
	expMapped,
	expObject,
	expOmit,
	expOperator,
	expPick,
	expPrimitive,
	expTemplateLiteral,
	expTuple,
	expUnion,
} from './expressions';
import { expTypeRef } from './expressions/expTypeRef';

export function layoutExpression(
	ctx: CodeLayoutContextValue | CodeLayoutWithGenericParamsContextValue,
	exp: TypeExpressionNode,
): CodeLayoutNode[] {
	switch (exp.kind) {
		case 'ref':
			return expTypeRef(ctx, exp);
		case 'primitive':
			return expPrimitive(ctx, exp);
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
		case 'function':
			return expFunction(ctx, exp);
		default:
			throw new Error(`Unknown kind ${(exp as TypeExpressionNode).kind} in expression`);
	}
}
