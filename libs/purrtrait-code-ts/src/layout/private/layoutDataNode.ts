import type {
	ComponentData,
	FunctionData,
	InterfaceTypeNode,
	TypeAliasData,
	TypeDeclarationData,
} from '@purrception/types-ts';
import type { CodeDataNode, CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import { layoutExpression } from './layoutExpression';
import { layoutComponentNode, layoutDeclarationNode, layoutInterfaceNode } from './nodes';
import { layoutAliasNode } from './nodes/layoutAliasNode';
import { layoutFunctionNode } from './nodes/layoutFunctionNode';

export function layoutDataNode(ctx: CodeLayoutContextValue, node: CodeDataNode): CodeLayoutNode[] {
	switch (node.kind) {
		case 'alias':
			return layoutAliasNode(ctx, node as TypeAliasData);
		case 'function':
			return layoutFunctionNode(ctx, node as FunctionData);
		case 'component':
			return layoutComponentNode(ctx, node as ComponentData);
		case 'interface':
			return layoutInterfaceNode(ctx, node as TypeDeclarationData<InterfaceTypeNode>);
	}
	if ('name' in node) {
		return layoutDeclarationNode(ctx, node as TypeDeclarationData);
	}
	return layoutExpression(ctx, node as TypeDeclarationData);
}
