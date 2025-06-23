import ts from 'typescript';

import type { NamedTupleTypeElement, TupleTypeNode } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';

export function extractTupleTypeNode(node: ts.TupleTypeNode): TupleTypeNode {
	const elements = node.elements.map(element => {
		if (ts.isNamedTupleMember(element)) {
			return {
				name: element.name.getText(),
				optional: !!element.questionToken,
				type: extractTypeExpression(element.type),
			} as NamedTupleTypeElement;
		}

		return extractTypeExpression(element);
	});

	return {
		kind: 'tuple',
		elements,
	};
}
