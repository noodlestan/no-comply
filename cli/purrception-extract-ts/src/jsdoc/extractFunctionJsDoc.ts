import ts from 'typescript';

import { extractParamTags, extractReturnsTag, extractTags, extractTemplateTags } from './private';
import type { FunctionJsDocData } from './types';
export function extractFunctionJsDoc(
	node: ts.FunctionTypeNode | ts.FunctionDeclaration | ts.ArrowFunction,
): FunctionJsDocData {
	const jsDoc = ts.getJSDocCommentsAndTags(node).find(ts.isJSDoc) as ts.JSDoc | undefined;

	const description = jsDoc?.comment?.toString();
	const templateTags = extractTemplateTags(jsDoc);
	const paramTags = extractParamTags(jsDoc);
	const returnsTag = extractReturnsTag(jsDoc);
	const tags = extractTags(jsDoc);

	return {
		description,
		templateTags,
		paramTags,
		returnsTag,
		tags,
	};
}
