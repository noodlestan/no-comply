import ts from 'typescript';

import type { TypeExpressionData, TypeRef } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';
import { extractTypeRef } from './extractTypeRef';

export function extractTypeRefOrExpression(node: ts.TypeNode): TypeExpressionData | TypeRef {
	switch (node.kind) {
		case ts.SyntaxKind.TypeLiteral:
		case ts.SyntaxKind.IntersectionType:
		case ts.SyntaxKind.UnionType:
		case ts.SyntaxKind.FunctionType:
		case ts.SyntaxKind.TypeReference:
		case ts.SyntaxKind.TypeQuery:
		case ts.SyntaxKind.LiteralType:
		case ts.SyntaxKind.MappedType:
		case ts.SyntaxKind.TupleType:
		case ts.SyntaxKind.ParenthesizedType:
			return extractTypeExpression(node);
		default:
			return extractTypeRef(node);
	}
}
