import type { InferTypeNode } from '@purrception/types-ts';
import type ts from 'typescript';

export function extractInferTypeNode(node: ts.InferTypeNode): InferTypeNode {
	return {
		kind: 'infer',
		name: node.typeParameter.name.getText(),
	};
}
