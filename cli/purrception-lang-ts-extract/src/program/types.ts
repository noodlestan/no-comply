import type {
	ComponentDeclaration,
	Declaration,
	FunctionDeclaration,
	TypeDeclaration,
} from '@purrception/lang-ts';
import { type ExportedSymbol, type ImportedSymbol } from '@purrception/primitives';
import ts from 'typescript';

export type ProgramFilesContext = {
	path: string;
	readFile: (filename: string) => Promise<string>;
};

export type ProgramFileAPI = {
	path: string;
	filename: string;
	filepath: string;
	sourceFile: ts.SourceFile;
	checker: ts.TypeChecker;
	types: () => (ts.TypeAliasDeclaration | ts.InterfaceDeclaration)[];
	functions: () => (ts.FunctionDeclaration | ts.ArrowFunction)[];
	exportsMap: () => Map<ts.Node, string>;
	importsMap: () => Map<string, ImportedSymbol>;
};

export type ProgramAPI = {
	files: Record<string, ProgramFileAPI>;
	extractComponents: (files?: string | string[]) => ComponentDeclaration[];
	extractFunctions: (files?: string | string[]) => FunctionDeclaration[];
	extractTypes: (files?: string | string[]) => Record<string, TypeDeclaration>;
	extractExternalImports: (files?: string | string[]) => Record<string, ImportedSymbol>;
	formatExports: (...args: Declaration[][]) => Record<string, ExportedSymbol>;
};
