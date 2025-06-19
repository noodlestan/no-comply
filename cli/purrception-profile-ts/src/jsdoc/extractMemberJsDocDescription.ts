import ts from 'typescript';

export function extractMemberJsDocDescription(member: ts.TypeElement): string | undefined {
	const jsDoc = ts.getJSDocCommentsAndTags(member).find(ts.isJSDoc);
	return jsDoc?.comment?.toString();
}
