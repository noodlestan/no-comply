import type { FunctionJsDocData } from '@purrception/lang-ts';
import ts from 'typescript';

import { extractParamTags, extractReturnsTag, extractTags, extractTemplateTags } from './private';
export function extractFunctionJsDoc(
	node: ts.FunctionDeclaration | ts.VariableDeclaration,
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
