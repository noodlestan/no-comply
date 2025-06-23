import type ts from 'typescript';

import type { MappedTypeNode } from '../../types';

export function extractMappedTypeNode(node: ts.MappedTypeNode): MappedTypeNode {
	const param = node.typeParameter.name.getText();
	const constraint = node.typeParameter.constraint?.getText() ?? 'any';
	const valueType = node.type ? node.type.getText() : 'any';

	return {
		kind: 'mapped',
		param,
		constraint,
		valueType,
		optional: node.questionToken != null,
		readonly: node.readonlyToken != null,
	};
}
