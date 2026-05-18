import { type ExportedSymbol, type ImportedSymbol } from '@purrception/primitives';
import type {
	ComponentDeclarationNode,
	DeclarationNode,
	DeclarationTypeNode,
	FunctionDeclarationNode,
} from '@purrception/types-ts';
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
	extractComponents: (files?: string | string[]) => ComponentDeclarationNode[];
	extractFunctions: (files?: string | string[]) => FunctionDeclarationNode[];
	extractTypes: (files?: string | string[]) => Record<string, DeclarationTypeNode>;
	extractImports: (files?: string | string[]) => Record<string, ImportedSymbol>;
	extractExternalImports: (files?: string | string[]) => Record<string, ImportedSymbol>;
	formatExports: (...args: DeclarationNode[][]) => Record<string, ExportedSymbol>;
};
