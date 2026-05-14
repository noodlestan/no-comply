import type { ComponentData } from '@purrception/types-ts';

import { hasJsDocIgnore } from '../jsdoc';
import { type ProgramFilesContext, createProgram } from '../program';
import { extractComponentFromProgramNode } from '../program-node';

export async function extractComponentsFromFile(
	ctx: ProgramFilesContext,
	filename: string,
): Promise<ComponentData[]> {
	const program = await createProgram(ctx, filename);

	const exportMap = program.exportsMap();
	const functions = program
		.functions()
		.filter(node => exportMap.has(node) && !hasJsDocIgnore(node))
		.map(node => extractComponentFromProgramNode(program, node))
		.filter(Boolean);

	return functions as unknown as ComponentData[];
}
