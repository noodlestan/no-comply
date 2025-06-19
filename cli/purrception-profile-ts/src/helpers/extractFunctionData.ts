import ts from 'typescript';

import { extractFunctionJsDoc } from '../jsdoc';
import type { ProgramContext } from '../program';
import type { FunctionData } from '../types';

import {
	extractExportedName,
	extractFunctionParams,
	extractFunctionReturns,
	extractNodeGenerics,
} from './private';

export function extractFunctionData(
	ctx: ProgramContext,
	node: ts.FunctionDeclaration | ts.ArrowFunction,
): FunctionData {
	const map = ctx.getExportMap();

	const name = extractExportedName(node, map);
	const jsDoc = extractFunctionJsDoc(node);
	const { description } = jsDoc;

	const generic = extractNodeGenerics(node);
	const params = extractFunctionParams(node, jsDoc);
	const returns = extractFunctionReturns(node, jsDoc);

	return {
		kind: 'function',
		name,
		generic,
		params,
		description,
		returns,
	};
}
