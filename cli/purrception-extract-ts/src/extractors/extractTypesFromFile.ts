import type { TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

import { type ProgramFilesContext, createProgram } from '../program';
import { extractTypeFromProgramNode } from '../program-node';

export async function extractTypesFromFile(
	ctx: ProgramFilesContext,
	filename: string,
): Promise<(TypeDeclarationData | TypeAliasData)[]> {
	const typesTs = await createProgram(ctx, filename);
	const types = typesTs.types().map(n => extractTypeFromProgramNode(typesTs, n));

	return types;
}
