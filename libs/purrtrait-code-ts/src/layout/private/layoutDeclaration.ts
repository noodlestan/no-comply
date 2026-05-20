import type {
	AliasDeclaration,
	ComponentDeclaration,
	FunctionDeclaration,
	InterfaceDeclaration,
	TypeExpressionDeclaration,
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
			case 'type':
				return layoutTypeDeclaration(ctx, node as TypeExpressionDeclaration);
			case 'alias':
				return layoutAliasDeclaration(ctx, node as AliasDeclaration);
			case 'function':
				return layoutFunctionDeclaration(ctx, node as FunctionDeclaration);
			case 'component':
				return layoutComponentDeclaration(ctx, node as ComponentDeclaration);
			case 'interface':
				return layoutInterfaceDeclaration(ctx, node as InterfaceDeclaration);
		}
	}
	console.error(`Invalid node:`, node);
	throw new Error(`Invalid node.`);
}
