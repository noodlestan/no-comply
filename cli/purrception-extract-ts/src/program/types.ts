import ts from 'typescript';

export type ProgramFilesContext = {
	path: string;
	readFile: (filename: string) => Promise<string>;
};

export type ProgramContext = {
	sourceFile: ts.SourceFile;
	checker: ts.TypeChecker;
	types: () => (ts.TypeAliasDeclaration | ts.InterfaceDeclaration)[];
	functions: () => (ts.FunctionDeclaration | ts.ArrowFunction)[];
	exportsMap: () => Map<ts.Node, string>;
};
