import type {
	AliasDeclarationNode,
	ComponentDeclarationNode,
	FunctionDeclarationNode,
	InterfaceDeclarationNode,
	TypeDeclarationNode,
} from '@purrception/types-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import {
	layoutAliasDeclaration,
	layoutComponentDeclaration,
	layoutInterfaceDeclaration,
	layoutTypeDeclaration,
} from './declarations';
import { layoutFunctionDeclaration } from './declarations/layoutFunctionDeclaration';

export function layoutDeclaration(ctx: CodeLayoutContextValue, node: object): CodeLayoutNode[] {
	if ('kind' in node) {
		switch (node.kind) {
			case 'alias':
				return layoutAliasDeclaration(ctx, node as AliasDeclarationNode);
			case 'function':
				return layoutFunctionDeclaration(ctx, node as FunctionDeclarationNode);
			case 'component':
				return layoutComponentDeclaration(ctx, node as ComponentDeclarationNode);
			case 'interface':
				return layoutInterfaceDeclaration(ctx, node as InterfaceDeclarationNode);
		}
		if ('name' in node) {
			return layoutTypeDeclaration(ctx, node as TypeDeclarationNode);
		}
	}
	console.error(`Invalid node:`, node);
	throw new Error(`Invalid node.`);
}
