import type {
	ComponentData,
	FunctionData,
	TypeAliasData,
	TypeDeclarationData,
} from '@purrception/types-ts';

import {
	extractComponentsFromProgram,
	extractFunctionsFromProgram,
	extractImportsFromProgram,
	extractTypesFromProgram,
} from '../extractors';

import { createProgramFile } from './createProgramFile';
import type { ImportedSymbol, ProgramContext, ProgramFilesContext } from './types';

export async function createProgram(
	ctx: ProgramFilesContext,
	files: Record<string, string | string[]>,
): Promise<{
	files: Record<string, ProgramContext>;
	extractComponents: (files?: string | string[]) => ComponentData[];
	extractFunctions: (files?: string | string[]) => FunctionData[];
	extractTypes: (files?: string | string[]) => (TypeDeclarationData | TypeAliasData)[];
	extractImports: (files?: string | string[]) => Record<string, ImportedSymbol>;
}> {
	const programs: Record<string, ProgramContext> = {};

	for (const key in files) {
		const file = files[key];
		if (!file) {
			continue;
		}
		if (typeof file === 'string') {
			programs[file] = await createProgramFile(ctx, file);
		} else {
			for (const name of file) {
				programs[name] = await createProgramFile(ctx, name);
			}
		}
	}

	const getPrograms = (files?: string | string[]) => {
		if (!files) {
			return Object.values(programs);
		}
		const fileArray = typeof files === 'string' ? [files] : files;
		return fileArray.map(file => programs[file]);
	};

	const extractComponents = (files?: string | string[]) => {
		const programs = getPrograms(files);
		const nested = programs.map(p => extractComponentsFromProgram(p));
		return nested.flat();
	};

	const extractFunctions = (files?: string | string[]) => {
		const programs = getPrograms(files);
		const nested = programs.map(p => extractFunctionsFromProgram(p));
		return nested.flat();
	};

	const extractTypes = (files?: string | string[]) => {
		const programs = getPrograms(files);
		const nested = programs.map(p => extractTypesFromProgram(p));
		return nested.flat();
	};

	const extractImports = (files?: string | string[]) => {
		const programs = getPrograms(files);
		const maps = programs.map(p => extractImportsFromProgram(p));

		const mergedMap = new Map();
		for (const map of maps) {
			for (const [key, value] of map.entries()) {
				const existing = mergedMap.get(key);
				if (existing) {
					if (existing.source === value.source && existing.name === value.name) {
						continue;
					}
					console.error('Existing entry:', existing);
					console.error('Duplicate entry:', value);
					throw new Error(`Duplicate key: ${key}`);
				}
				mergedMap.set(key, value);
			}
		}

		return Object.fromEntries(mergedMap);
	};

	return { files: programs, extractComponents, extractFunctions, extractTypes, extractImports };
}
