import ts from 'typescript';

import type { TypeExpressionData, TypeRef } from '../../types';

import { extractFunctionTypeNode } from './extractFunctionTypeNode';
import { extractIntersectionTypeNode } from './extractIntersectionTypeNode';
import { extractObjectLiteralTypeNode } from './extractObjectLiteralTypeNode';
import { extractTypeRef } from './extractTypeRef';
import { extractUnionTypeNode } from './extractUnionTypeNode';
import { throwUnsupportedNodeError } from './throwUnsupportedNodeError';

const primitiveKinds = new Set([
	ts.SyntaxKind.NumberKeyword,
	ts.SyntaxKind.StringKeyword,
	ts.SyntaxKind.BooleanKeyword,
	ts.SyntaxKind.VoidKeyword,
	ts.SyntaxKind.UndefinedKeyword,
	ts.SyntaxKind.NullKeyword,
	ts.SyntaxKind.AnyKeyword,
	ts.SyntaxKind.UnknownKeyword,
	ts.SyntaxKind.NeverKeyword,
	ts.SyntaxKind.BigIntKeyword,
	ts.SyntaxKind.SymbolKeyword,
]);

/**
 * Recursive entry point to extract either a structured TypeExpression or a TypeRef.
 * Accepts any type-related node (top-level declarations or inline type nodes).
 */
export function extractTypeExpression(
	node: ts.TypeNode | ts.TypeAliasDeclaration | ts.InterfaceDeclaration,
): TypeExpressionData | TypeRef {
	// interface Foo { ... }
	if (ts.isInterfaceDeclaration(node)) {
		return extractObjectLiteralTypeNode(node);
	}

	// type Foo = ...
	if (ts.isTypeAliasDeclaration(node)) {
		return extractTypeExpression(node.type);
	}

	// If node is a reference — short-circuit to TypeRef
	if (
		ts.isTypeReferenceNode(node) ||
		ts.isIndexedAccessTypeNode(node) ||
		ts.isTypeQueryNode(node)
	) {
		return extractTypeRef(node);
	}
	if (ts.isTypeLiteralNode(node)) {
		return extractObjectLiteralTypeNode(node);
	}
	if (ts.isFunctionTypeNode(node)) {
		return extractFunctionTypeNode(node);
	}
	if (ts.isIntersectionTypeNode(node)) {
		return extractIntersectionTypeNode(node);
	}
	if (ts.isUnionTypeNode(node)) {
		return extractUnionTypeNode(node);
	}
	if (ts.isMappedTypeNode(node)) {
		throwUnsupportedNodeError(node, 'MappedType not yet supported');
	}
	if (ts.isParenthesizedTypeNode(node)) {
		return extractTypeExpression(node.type);
	}

	if (primitiveKinds.has(node.kind) || ts.isLiteralTypeNode(node)) {
		return node.getText();
	}

	throwUnsupportedNodeError(node, 'type expression');
}
