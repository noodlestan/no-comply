import type { FunctionData } from '@purrception/types-ts';

import { hasJsDocIgnore } from '../jsdoc';
import { type ProgramFilesContext, createProgram } from '../program';
import { extractFunctionFromProgramNode } from '../program-node';

export async function extractFunctionsFromFile(
	ctx: ProgramFilesContext,
	filename: string,
): Promise<FunctionData[]> {
	const implementationTs = await createProgram(ctx, filename);

	const exportMap = implementationTs.exportsMap();
	const functions = implementationTs
		.functions()
		.filter(n => exportMap.has(n) && !hasJsDocIgnore(n))
		.map(n => extractFunctionFromProgramNode(implementationTs, n));

	return functions;
}
