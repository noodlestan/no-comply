import ts from 'typescript';

import type { DeclarationJsDoc } from './types';

export function extractDeclarationJsDoc(node: ts.Node): DeclarationJsDoc {
	const jsDoc = ts.getJSDocCommentsAndTags(node).find(ts.isJSDoc) as ts.JSDoc | undefined;

	const tags = new Map<string, string>();
	const description = jsDoc?.comment?.toString();

	if (jsDoc?.tags) {
		for (const tag of jsDoc.tags) {
			const name = tag.tagName.getText();
			if (name !== 'param' && name !== 'returns') {
				tags.set(name, typeof tag.comment === 'string' ? tag.comment : '');
			}
		}
	}

	return { description, tags };
}
