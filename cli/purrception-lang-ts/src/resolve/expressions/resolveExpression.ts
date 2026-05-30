import { type TypeExpressionNode, type TypeRef, isTypeRef } from '../../node';
import type { ResolveTypeContext } from '../types';

import { resolveIntersection } from './kinds/resolveIntersection';
import { resolveObject } from './kinds/resolveObject';
import { resolveOmit } from './kinds/resolveOmit';
import { resolvePick } from './kinds/resolvePick';
import { resolveTypeRefNode } from './kinds/resolveTypeRefNode';
import { resolveUnion } from './kinds/resolveUnion';

export function resolveExpression(
	context: ResolveTypeContext,
	exp: TypeRef | TypeExpressionNode,
): TypeExpressionNode | TypeRef {
	if (isTypeRef(exp)) {
		return resolveTypeRefNode(context, exp);
	}

	switch (exp.kind) {
		case 'object':
			return resolveObject(context, exp);
		case 'intersection':
			return resolveIntersection(context, exp);
		case 'union':
			return resolveUnion(context, exp);
		case 'pick':
			return resolvePick(context, exp);
		case 'omit':
			return resolveOmit(context, exp);
		case 'literal':
			return exp;
		case 'array':
			return exp;
		case 'tuple':
			return exp;
		case 'template-literal':
			return exp;
		case 'operator':
			return exp;
		case 'mapped':
			return exp;
		case 'conditional':
			return exp;
		case 'infer':
			return exp;
		case 'function':
			return exp;
		default:
			throw new Error(`Unknown kind ${(exp as TypeExpressionNode).kind} in expression`);
	}
}
