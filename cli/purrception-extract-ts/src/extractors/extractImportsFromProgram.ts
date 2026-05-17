import { type ImportedSymbol, type ProgramContext } from '../program';

export function extractImportsFromProgram(program: ProgramContext): Map<string, ImportedSymbol> {
	const types = program.importsMap();

	return types;
}
