import type { DeclarationTypeNode } from '@purrception/types-ts';

import { type ProgramFileAPI } from '../program';
import { extractTypeFromProgramNode } from '../program-node';

export function extractTypesFromProgram(program: ProgramFileAPI): DeclarationTypeNode[] {
	const types = program.types().map(n => extractTypeFromProgramNode(program, n));

	return types;
}
