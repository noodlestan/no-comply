import type {
	ComponentDeclaration,
	Declaration,
	FunctionDeclaration,
	InterfaceDeclaration,
	TypeExpressionDeclaration,
} from '@purrception/lang-ts';
import type { CodeLayoutContextValue, CodeLayoutNode } from '@purrtrait/code-layout';

import {
	layoutComponentDeclaration,
	layoutInterfaceDeclaration,
	layoutTypeDeclaration,
} from './declarations';
import { layoutFunctionDeclaration } from './declarations/layoutFunctionDeclaration';

export function layoutDeclaration(
	ctx: CodeLayoutContextValue,
	declaration: Declaration,
): CodeLayoutNode[] {
	if ('kind' in declaration) {
		switch (declaration.kind) {
			case 'type':
				return layoutTypeDeclaration(ctx, declaration as TypeExpressionDeclaration);
			case 'function':
				return layoutFunctionDeclaration(ctx, declaration as FunctionDeclaration);
			case 'component':
				return layoutComponentDeclaration(ctx, declaration as ComponentDeclaration);
			case 'interface':
				return layoutInterfaceDeclaration(ctx, declaration as InterfaceDeclaration);
		}
	}
	console.error(`Invalid node:`, declaration);
	throw new Error(`Invalid node.`);
}
