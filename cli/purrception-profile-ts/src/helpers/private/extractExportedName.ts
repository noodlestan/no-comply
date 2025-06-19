import ts from 'typescript';

export function extractExportedName(
	node: ts.Node & { name?: ts.Identifier },
	exportMap: Map<ts.Node, string>,
): string {
	const exportedName = exportMap.get(node);
	if (exportedName) {
		return exportedName;
	}

	if (node.name && ts.isIdentifier(node.name)) {
		return node.name.escapedText.toString();
	}

	return 'anonymous';
}
