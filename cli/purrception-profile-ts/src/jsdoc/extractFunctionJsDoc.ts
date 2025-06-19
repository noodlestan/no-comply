import ts from 'typescript';

import type { FunctionJsDoc } from './types';

export function extractFunctionJsDoc(
	node: ts.FunctionDeclaration | ts.ArrowFunction,
): FunctionJsDoc {
	const jsDoc = ts.getJSDocCommentsAndTags(node).find(ts.isJSDoc) as ts.JSDoc | undefined;

	const paramTags = new Map<string, string>();
	let returnsTag: string | undefined;
	const tags = new Map<string, string>();
	const description = jsDoc?.comment?.toString();

	if (jsDoc?.tags) {
		for (const tag of jsDoc.tags) {
			const name = tag.tagName.getText();
			const comment = typeof tag.comment === 'string' ? tag.comment : '';

			if (ts.isJSDocParameterTag(tag)) {
				paramTags.set(tag.name.getText(), comment);
			} else if (ts.isJSDocReturnTag(tag)) {
				returnsTag = comment;
			} else {
				tags.set(name, comment);
			}
		}
	}

	return {
		description,
		paramTags,
		returnsTag,
		tags,
	};
}
