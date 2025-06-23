import ts from 'typescript';

import { extractFunctionJsDoc } from '../jsdoc';
import type { ProgramContext } from '../program';
import type { FunctionData } from '../types';

import {
	extractArrowFunctionType,
	extractExportedName,
	extractFunctionParams,
	extractFunctionReturns,
	extractNodeGenerics,
} from './helpers';

export function extractFunctionFromProgramNode(
	ctx: ProgramContext,
	node: ts.FunctionDeclaration | ts.ArrowFunction,
): FunctionData {
	const map = ctx.exportsMap();

	const name = extractExportedName(node, map);
	const jsDoc = extractFunctionJsDoc(node);
	const { description, templateTags, tags } = jsDoc;

	const type = extractArrowFunctionType(node);
	const generic = extractNodeGenerics(node);
	const params = extractFunctionParams(node.parameters, jsDoc);
	const returns = extractFunctionReturns(node.type, jsDoc);

	return {
		kind: 'function',
		name,
		type,
		generic,
		params,
		returns,
		description,
		templateTags,
		tags,
	};
}
