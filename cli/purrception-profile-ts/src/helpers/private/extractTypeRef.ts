import ts from 'typescript';

import type { TypeRef, TypeRefObject } from '../../types';

function normalizeTypeRef(type: TypeRef): TypeRefObject {
	if (typeof type === 'string') {
		return { type };
	}
	return type;
}

export function extractTypeRef(node: ts.TypeNode): TypeRef {
	if (ts.isTypeReferenceNode(node)) {
		const baseName = node.typeName.getText();
		const typeArgs = node.typeArguments?.[0]?.getText();

		if (!typeArgs) {
			return baseName;
		}

		return {
			type: baseName,
			generic: typeArgs,
		};
	}

	if (ts.isIndexedAccessTypeNode(node)) {
		const objectTypeRaw = extractTypeRef(node.objectType);
		const objectType = normalizeTypeRef(objectTypeRaw);

		const index =
			ts.isLiteralTypeNode(node.indexType) && ts.isStringLiteral(node.indexType.literal)
				? node.indexType.literal.text
				: undefined;

		if (!index) {
			return objectType;
		}

		return {
			...objectType,
			member: index,
		};
	}

	return node.getText();
}
