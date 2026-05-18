import type { ExportedSymbol, ImportedSymbol } from '@purrception/primitives';
import type { DeclarationNode, DeclarationTypeNode } from '@purrception/types-ts';

import {
	extractComponentsFromProgram,
	extractFunctionsFromProgram,
	extractImportsFromProgram,
	extractTypesFromProgram,
} from '../extractors';

import { createProgramFile } from './createProgramFile';
import type { ProgramAPI, ProgramFileAPI, ProgramFilesContext } from './types';

export async function createProgram(
	ctx: ProgramFilesContext,
	files: Record<string, string | string[]>,
): Promise<ProgramAPI> {
	const programs: Record<string, ProgramFileAPI> = {};

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
		const flat = nested.flat();

		const types: Record<string, DeclarationTypeNode> = {};
		for (const t of flat) {
			types[t.name] = t;
		}
		return types;
	};

	const extractImportMap = (files?: string | string[]) => {
		const programs = getPrograms(files);
		const maps = programs.map(p => extractImportsFromProgram(p));

		const mergedMap = new Map<string, ImportedSymbol>();
		for (const map of maps) {
			for (const [key, value] of map.entries()) {
				const existing = mergedMap.get(key);
				if (existing) {
					if (existing.from === value.from && existing.name === value.name) {
						continue;
					}
					console.error('Existing entry:', existing);
					console.error('Duplicate entry:', value);
					throw new Error(`Duplicate key: ${key}`);
				}
				mergedMap.set(key, value);
			}
		}

		return mergedMap;
	};

	const extractImports = (files?: string | string[]) => {
		const map = extractImportMap(files);
		return Object.fromEntries(map);
	};

	const isLocalImport = (dep: ImportedSymbol) => {
		return dep.from.includes(ctx.path);
	};

	const extractExternalImports = (files?: string | string[]) => {
		const map = extractImportMap(files);
		const entries = Array.from(map.entries()).filter(([, value]) => !isLocalImport(value));
		return Object.fromEntries(entries);
	};

	const formatExports = (...args: DeclarationNode[][]) => {
		const entries = args
			.map(arg => arg.map(({ at, name }) => [name, { at, name } as ExportedSymbol]))
			.flat();
		return Object.fromEntries(entries);
	};

	return {
		files: programs,
		extractComponents,
		extractFunctions,
		extractTypes,
		extractImports,
		extractExternalImports,
		formatExports,
	};
}
