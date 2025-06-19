import ts from 'typescript';

import type { FunctionMeta, ParamMeta } from '../types';

export function normalizeFunction(
	node: ts.FunctionDeclaration | ts.ArrowFunction,
	map: Map<ts.Node, string>,
): FunctionMeta {
	const name =
		map.get(node) ??
		(node.name && ts.isIdentifier(node.name) ? node.name.escapedText.toString() : 'anonymous');

	// Get JSDoc comment (can be undefined)
	const jsDoc = ts.getJSDocCommentsAndTags(node).find(x => ts.isJSDoc(x)) as ts.JSDoc | undefined;
	const description = jsDoc?.comment?.toString() ?? '';

	const generic =
		node.typeParameters?.length === 1
			? {
					name: node.typeParameters[0].name.getText(),
					constraint: node.typeParameters[0].constraint?.getText() ?? '',
					default: node.typeParameters[0].default?.getText() ?? undefined,
				}
			: undefined;

	const params: ParamMeta[] = node.parameters.map(param => ({
		name: param.name.getText(),
		type: param.type ? { type: param.type.getText() } : { type: 'any' },
		optional: Boolean(param.questionToken),
	}));

	const returns = node.type ? { type: node.type.getText() } : { type: 'void' };

	return { name, generic, params, description, returns };
}
