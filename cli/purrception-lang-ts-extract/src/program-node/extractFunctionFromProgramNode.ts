import type { FunctionDeclaration } from '@purrception/lang-ts';
import ts from 'typescript';

import { extractFunctionJsDoc } from '../jsdoc';
import type { ProgramFileAPI } from '../program';

import {
	extractArrowFunctionType,
	extractExportedName,
	extractFunctionParams,
	extractFunctionReturns,
	extractNodeGenerics,
} from './helpers';

export function extractFunctionFromProgramNode(
	programFile: ProgramFileAPI,
	node: ts.FunctionDeclaration | ts.ArrowFunction,
): FunctionDeclaration {
	const map = programFile.exportsMap();

	const name = extractExportedName(node, map);
	const jsDoc = extractFunctionJsDoc(node);
	const { description, templateTags, tags } = jsDoc;

	const type = extractArrowFunctionType(node);
	const generic = !type ? extractNodeGenerics(node) : undefined;
	const params = !type ? extractFunctionParams(node.parameters, jsDoc) : undefined;
	const returns = !type ? extractFunctionReturns(node.type, jsDoc) : undefined;

	return {
		at: programFile.filepath,
		name,
		kind: 'function',
		generic,
		params,
		returns,
		type,
		description,
		templateTags,
		tags,
	};
}
