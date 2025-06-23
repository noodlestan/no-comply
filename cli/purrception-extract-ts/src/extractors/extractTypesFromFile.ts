import { type ProgramFilesContext, createProgram } from '../program';
import { extractTypeFromProgramNode } from '../program-node';
import type { TypeDeclarationData } from '../types';

export async function extractTypesFromFile(
	ctx: ProgramFilesContext,
	filename: string,
): Promise<TypeDeclarationData[]> {
	const typesTs = await createProgram(ctx, filename);
	const types = typesTs.types().map(n => extractTypeFromProgramNode(typesTs, n));

	return types;
}
