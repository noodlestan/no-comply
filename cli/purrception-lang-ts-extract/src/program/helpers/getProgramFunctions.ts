import ts from 'typescript';

export function getProgramFunctions(
	sourceFile: ts.SourceFile,
): (ts.FunctionDeclaration | ts.ArrowFunction)[] {
	const functions: (ts.FunctionDeclaration | ts.ArrowFunction)[] = [];

	const visit = (node: ts.Node) => {
		if (ts.isFunctionDeclaration(node) || ts.isArrowFunction(node)) {
			functions.push(node);
		}
		ts.forEachChild(node, visit);
	};

	visit(sourceFile);

	return functions;
}
