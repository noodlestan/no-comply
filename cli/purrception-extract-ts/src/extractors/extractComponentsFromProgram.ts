import type { ComponentDeclarationNode } from '@purrception/types-ts';

import { hasJsDocIgnore } from '../jsdoc';
import { type ProgramFileAPI } from '../program';
import { extractComponentFromProgramNode } from '../program-node';

export function extractComponentsFromProgram(program: ProgramFileAPI): ComponentDeclarationNode[] {
	const exportMap = program.exportsMap();
	const functions = program
		.functions()
		.filter(node => exportMap.has(node) && !hasJsDocIgnore(node))
		.map(node => extractComponentFromProgramNode(program, node))
		.filter(Boolean);

	return functions as ComponentDeclarationNode[];
}
