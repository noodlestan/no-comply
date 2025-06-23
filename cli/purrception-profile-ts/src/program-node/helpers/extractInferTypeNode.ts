import type ts from 'typescript';

import type { InferTypeNode } from '../../types';

export function extractInferTypeNode(node: ts.InferTypeNode): InferTypeNode {
	return {
		kind: 'infer',
		name: node.typeParameter.name.getText(),
	};
}
