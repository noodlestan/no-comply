import ts from 'typescript';

export function hasJsDocIgnore(node: ts.FunctionDeclaration | ts.ArrowFunction): boolean {
	const tags = ts.getJSDocTags(node);
	return tags.some(tag => tag.tagName.escapedText === 'ignore');
}
