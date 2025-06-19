import ts from 'typescript';

export type FilesContext = {
	path: string;
	readFile: (filename: string) => Promise<string>;
};

export type ProgramContext = {
	sourceFile: ts.SourceFile;
	types: () => (ts.TypeAliasDeclaration | ts.InterfaceDeclaration)[];
	functions: () => (ts.FunctionDeclaration | ts.ArrowFunction)[];
	getExportMap: () => Map<ts.Node, string>;
};
