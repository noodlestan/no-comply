import type { TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

import { type ProgramContext } from '../program';
import { extractTypeFromProgramNode } from '../program-node';

export function extractTypesFromProgram(
	program: ProgramContext,
): (TypeDeclarationData | TypeAliasData)[] {
	const types = program.types().map(n => extractTypeFromProgramNode(program, n));

	return types;
}
