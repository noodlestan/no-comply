import type { TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';
import ts from 'typescript';

import { extractDeclarationJsDoc } from '../jsdoc';
import type { ProgramContext } from '../program';

import {
	extractExportedName,
	extractNodeGenerics,
	extractTypeExpression,
	isTypeExpressionNode,
	normalizeTypeRefObject,
} from './helpers';

export function extractTypeFromProgramNode(
	ctx: ProgramContext,
	node: ts.TypeAliasDeclaration | ts.InterfaceDeclaration,
): TypeDeclarationData | TypeAliasData {
	const map = ctx.exportsMap();

	const name = extractExportedName(node, map);
	const jsDoc = extractDeclarationJsDoc(node);
	const { description, templateTags, tags } = jsDoc;

	const generic = extractNodeGenerics(node);
	const base = extractTypeExpression(node);

	if (isTypeExpressionNode(base)) {
		return { name, generic, ...base, description, templateTags, tags };
	}

	const target = normalizeTypeRefObject(base);

	return {
		kind: 'alias',
		name,
		generic,
		target,
		description,
		templateTags,
		tags,
	};
}
