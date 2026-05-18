import type {
	AliasDeclarationNode,
	DeclarationTypeNode,
	TypeDeclarationNode,
} from '@purrception/types-ts';
import ts from 'typescript';

import { extractDeclarationJsDoc } from '../jsdoc';
import type { ProgramFileAPI } from '../program';

import {
	extractExportedName,
	extractInterfaceDeclaration,
	extractTypeExpression,
	isTypeExpressionNode,
	normalizeTypeRefObject,
} from './helpers';

export function extractTypeFromProgramNode(
	programFile: ProgramFileAPI,
	node: ts.TypeAliasDeclaration | ts.InterfaceDeclaration,
): DeclarationTypeNode {
	const map = programFile.exportsMap();

	const name = extractExportedName(node, map);
	const jsDoc = extractDeclarationJsDoc(node);
	const { description, templateTags, tags } = jsDoc;

	if (ts.isInterfaceDeclaration(node)) {
		return extractInterfaceDeclaration(programFile.filepath, name, node);
	}

	const base = extractTypeExpression(node);
	if (isTypeExpressionNode(base)) {
		const type: TypeDeclarationNode = {
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

	const alias: AliasDeclarationNode = {
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
