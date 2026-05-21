import path from 'path';

import ts from 'typescript';

import { getExportMap, getImportMap, getProgramFunctions, getProgramTypes } from './helpers';
import type { ProgramFileAPI, ProgramFilesContext } from './types';

export async function createProgramFile(
	ctx: ProgramFilesContext,
	filename: string,
): Promise<ProgramFileAPI> {
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
		path: ctx.path,
		filename,
		filepath: path.join(ctx.path, filename),
		sourceFile,
		checker,
		types: () => getProgramTypes(sourceFile),
		functions: () => getProgramFunctions(sourceFile),
		exportsMap: () => getExportMap(sourceFile, checker),
		importsMap: () => getImportMap(path.join(ctx.path, filename), sourceFile),
	};
}
