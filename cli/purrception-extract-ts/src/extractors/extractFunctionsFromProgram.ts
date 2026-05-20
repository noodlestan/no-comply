import type { FunctionDeclaration } from '@purrception/types-ts';

import { hasJsDocIgnore } from '../jsdoc';
import { type ProgramFileAPI } from '../program';
import { extractFunctionFromProgramNode } from '../program-node';

export function extractFunctionsFromProgram(program: ProgramFileAPI): FunctionDeclaration[] {
	const exportMap = program.exportsMap();
	const functions = program
		.functions()
		.filter(n => exportMap.has(n) && !hasJsDocIgnore(n))
		.map(n => extractFunctionFromProgramNode(program, n));

	return functions;
}
