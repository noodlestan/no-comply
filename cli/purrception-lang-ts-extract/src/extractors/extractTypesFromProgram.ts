import type { TypeDeclaration } from '@purrception/lang-ts';

import { type ProgramFileAPI } from '../program';
import { extractTypeFromProgramNode } from '../program-node';

export function extractTypesFromProgram(program: ProgramFileAPI): TypeDeclaration[] {
	const types = program.types().map(n => extractTypeFromProgramNode(program, n));

	return types;
}
