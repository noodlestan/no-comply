import type { ComponentData } from '@purrception/types-ts';

import { hasJsDocIgnore } from '../jsdoc';
import { type ProgramContext } from '../program';
import { extractComponentFromProgramNode } from '../program-node';

export function extractComponentsFromProgram(program: ProgramContext): ComponentData[] {
	const exportMap = program.exportsMap();
	const functions = program
		.functions()
		.filter(node => exportMap.has(node) && !hasJsDocIgnore(node))
		.map(node => extractComponentFromProgramNode(program, node))
		.filter(Boolean);

	return functions as ComponentData[];
}
