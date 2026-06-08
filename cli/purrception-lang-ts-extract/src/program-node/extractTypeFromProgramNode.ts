import { type TypeDeclaration, type TypeExpressionDeclaration } from '@purrception/lang-ts';
import ts from 'typescript';

import { extractNodeJsDoc } from '../jsdoc';
import type { ProgramFileAPI } from '../program';

import {
	extractExportedName,
	extractInterfaceDeclaration,
	extractTypeExpression,
	isExportedDeclaration,
} from './helpers';

export function extractTypeFromProgramNode(
	programFile: ProgramFileAPI,
	node: ts.TypeAliasDeclaration | ts.InterfaceDeclaration,
): TypeDeclaration {
	const map = programFile.exportsMap();

	const name = extractExportedName(node, map);
	const jsDoc = extractNodeJsDoc(node);
	const { description, templateTags, tags } = jsDoc;

	if (ts.isInterfaceDeclaration(node)) {
		return extractInterfaceDeclaration(programFile.filepath, name, node);
	}

	const base = extractTypeExpression(node);
	const type: TypeExpressionDeclaration = {
		at: programFile.filepath,
		name,
		kind: 'type',
		private: !isExportedDeclaration(node),
		node: base,
		description,
		templateTags,
		tags,
	};
	return type;
}
