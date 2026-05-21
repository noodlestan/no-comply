import {
	type AliasDeclaration,
	type TypeDeclaration,
	type TypeExpressionDeclaration,
	isTypeExpressionNode,
	normalizeTypeRefObject,
} from '@purrception/lang-ts';
import ts from 'typescript';

import { extractDeclarationJsDoc } from '../jsdoc';
import type { ProgramFileAPI } from '../program';

import { extractExportedName, extractInterfaceDeclaration, extractTypeExpression } from './helpers';

export function extractTypeFromProgramNode(
	programFile: ProgramFileAPI,
	node: ts.TypeAliasDeclaration | ts.InterfaceDeclaration,
): TypeDeclaration {
	const map = programFile.exportsMap();

	const name = extractExportedName(node, map);
	const jsDoc = extractDeclarationJsDoc(node);
	const { description, templateTags, tags } = jsDoc;

	if (ts.isInterfaceDeclaration(node)) {
		return extractInterfaceDeclaration(programFile.filepath, name, node);
	}

	const base = extractTypeExpression(node);
	if (isTypeExpressionNode(base)) {
		const type: TypeExpressionDeclaration = {
			at: programFile.filepath,
			name,
			kind: 'type',
			node: base,
			description,
			templateTags,
			tags,
		};
		return type;
	}

	const target = normalizeTypeRefObject(base);

	const alias: AliasDeclaration = {
		at: programFile.filepath,
		name,
		kind: 'alias',
		target,
		description,
		templateTags,
		tags,
	};
	return alias;
}
