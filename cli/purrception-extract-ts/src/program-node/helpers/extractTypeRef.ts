import type { TypeRef, TypeRefObject } from '@purrception/types-ts';
import ts from 'typescript';

import { extractTypeExpression } from './extractTypeExpression';

function normalizeTypeRef(type: TypeRef): TypeRefObject {
	if (typeof type === 'string') {
		return { type };
	}
	return type;
}

export function extractTypeRef(node: ts.TypeNode): TypeRef {
	if (ts.isTypeReferenceNode(node)) {
		const baseName = node.typeName.getText();

		let params: TypeRefObject['params'] | undefined;

		if (node.typeArguments?.length) {
			params = node.typeArguments.map(arg => extractTypeExpression(arg));
		}

		if (!params) {
			return baseName;
		}

		return {
			type: baseName,
			params,
		};
	}

	if (ts.isIndexedAccessTypeNode(node)) {
		const objectTypeRaw = extractTypeRef(node.objectType);
		const objectType = normalizeTypeRef(objectTypeRaw);

		const key =
			ts.isLiteralTypeNode(node.indexType) && ts.isStringLiteral(node.indexType.literal)
				? node.indexType.literal.text
				: undefined;

		if (!key) {
			return objectType;
		}

		return {
			...objectType,
			member: key,
		};
	}

	return node.getText();
}
