import type { TypeExpressionNode, TypeRefNode } from '@purrception/lang-ts';
import ts from 'typescript';

import { addChildrenToComponentProps } from './addChildrenToComponentProps';
import { extractFunctionParams } from './extractFunctionParams';

export function extractComponentProps(
	node: ts.FunctionDeclaration | ts.ArrowFunction,
	componentType: TypeRefNode | undefined,
): TypeExpressionNode | undefined {
	if (!componentType) {
		const params = extractFunctionParams(node.parameters);
		return params[0]?.type;
	}

	const genericParam = componentType.params?.[0];
	if (!genericParam) {
		return undefined;
	}

	return addChildrenToComponentProps(componentType, genericParam);
}
