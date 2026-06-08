import ts from 'typescript';

export function isExportedDeclaration(
	node:
		| ts.VariableDeclaration
		| ts.FunctionDeclaration
		| ts.TypeAliasDeclaration
		| ts.InterfaceDeclaration,
): boolean {
	if (
		ts.isTypeAliasDeclaration(node) ||
		ts.isInterfaceDeclaration(node) ||
		ts.isFunctionDeclaration(node)
	) {
		return !!node.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
	}

	if (ts.isVariableDeclaration(node)) {
		const statement = node.parent?.parent;

		return (
			ts.isVariableStatement(statement) &&
			!!statement.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword)
		);
	}

	return false;
}
