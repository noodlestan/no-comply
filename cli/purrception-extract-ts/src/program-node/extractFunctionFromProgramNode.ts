import type { FunctionData } from '@purrception/types-ts';
import ts from 'typescript';

import { extractFunctionJsDoc } from '../jsdoc';
import type { ProgramContext } from '../program';

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
	const generic = !type ? extractNodeGenerics(node) : undefined;
	const params = !type ? extractFunctionParams(node.parameters, jsDoc) : undefined;
	const returns = !type ? extractFunctionReturns(node.type, jsDoc) : undefined;

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
