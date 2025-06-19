import path from 'path';

import ts from 'typescript';

import { getProgramFunctions } from './getProgramFunctions';
import { getProgramTypes } from './getProgramTypes';
import { getExportMap } from './private';
import type { FilesContext, ProgramContext } from './types';

export async function createProgramContext(
	ctx: FilesContext,
	filename: string,
): Promise<ProgramContext> {
	const fullPath = path.resolve(ctx.path, filename);
	const sourceText = await ctx.readFile(filename);

	const compilerOptions: ts.CompilerOptions = {
		target: ts.ScriptTarget.ESNext,
		module: ts.ModuleKind.ESNext,
		moduleResolution: ts.ModuleResolutionKind.NodeJs,
	};

	const host = ts.createCompilerHost(compilerOptions);
	host.readFile = filePath => (filePath === fullPath ? sourceText : undefined);
	host.fileExists = filePath => filePath === fullPath;

	const program = ts.createProgram([fullPath], compilerOptions, host);
	const checker = program.getTypeChecker();
	const sourceFile = program.getSourceFile(fullPath);
	if (!sourceFile) {
		throw new Error(`Could not load: ${fullPath}`);
	}

	return {
		sourceFile,
		types: () => getProgramTypes(sourceFile),
		functions: () => getProgramFunctions(sourceFile),
		getExportMap: () => getExportMap(sourceFile, checker),
	};
}
