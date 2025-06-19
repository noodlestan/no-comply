import ts from 'typescript';

import { extractDeclarationJsDoc } from '../jsdoc';
import type { ProgramContext } from '../program';
import type {
	TypeAliasData,
	TypeDeclarationData,
	TypeExpressionData,
	TypeRef,
	TypeRefObject,
} from '../types';

import { extractExportedName, extractTypeExpression } from './private';

export function isTypeExpressionData(
	data: TypeExpressionData | TypeRef,
): data is TypeExpressionData {
	return !!data && typeof data === 'object' && 'kind' in data;
}

export function extractTypeDeclarationData(
	ctx: ProgramContext,
	node: ts.TypeAliasDeclaration | ts.InterfaceDeclaration,
): TypeDeclarationData | TypeAliasData {
	const map = ctx.getExportMap();

	const name = extractExportedName(node, map);
	const { description } = extractDeclarationJsDoc(node);
	const base = extractTypeExpression(node);

	if (isTypeExpressionData(base)) {
		return { name, description, ...base };
	}

	// Normalize string ref to object
	const target: TypeRefObject = typeof base === 'string' ? { type: base } : base;

	return {
		name,
		description,
		kind: 'alias',
		target,
	};
}
