import ts from 'typescript';

export function getArrowFunctionDeclarationNode(
	node: ts.FunctionDeclaration | ts.ArrowFunction,
): ts.VariableDeclaration | ts.FunctionDeclaration {
	if (ts.isArrowFunction(node)) {
		return node.parent as ts.VariableDeclaration;
	}
	return node as ts.FunctionDeclaration;
}
