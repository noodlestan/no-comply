import type { DeclarationJsDocData } from '@purrception/types-ts';
import ts from 'typescript';

import { extractTags, extractTemplateTags } from './private';
export function extractDeclarationJsDoc(node: ts.Node): DeclarationJsDocData {
	const jsDoc = ts.getJSDocCommentsAndTags(node).find(ts.isJSDoc) as ts.JSDoc | undefined;

	const description = jsDoc?.comment?.toString();
	const templateTags = extractTemplateTags(jsDoc);
	const tags = extractTags(jsDoc);

	return { description, tags, templateTags };
}
