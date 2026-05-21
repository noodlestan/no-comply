import type { ExportedSymbol } from '@purrception/primitives';

import type { DeclarationJsDocData } from '../jsdoc';
import type {
	ComponentNode,
	FunctionTypeNode,
	ObjectLiteralTypeMember,
	TypeExpressionGeneric,
	TypeExpressionNode,
	TypeRef,
} from '../node';

export type DeclarationKind = 'type' | 'interface' | 'alias' | 'function' | 'component';

export interface DeclarationBase<K extends DeclarationKind>
	extends ExportedSymbol,
		DeclarationJsDocData {
	kind: K;
}

export type TypeExpressionDeclaration<K extends TypeExpressionNode = TypeExpressionNode> =
	DeclarationBase<'type'> & {
		node: K;
	};

export type InterfaceDeclaration = DeclarationBase<'interface'> & {
	generic?: TypeExpressionGeneric[];
	heritage?: (TypeExpressionNode | TypeRef)[];
	members: Record<string, ObjectLiteralTypeMember>;
};

export type AliasDeclaration = DeclarationBase<'alias'> & {
	target: TypeRef;
};

export type FunctionDeclaration = DeclarationBase<'function'> &
	FunctionTypeNode & {
		type?: TypeExpressionNode | TypeRef;
	};

export type ComponentDeclaration = DeclarationBase<'component'> &
	ComponentNode & {
		generic?: TypeExpressionGeneric[];
	};

export type Declaration =
	| TypeExpressionDeclaration<TypeExpressionNode>
	| InterfaceDeclaration
	| AliasDeclaration
	| FunctionDeclaration
	| ComponentDeclaration;

export type TypeDeclaration =
	| TypeExpressionDeclaration<TypeExpressionNode>
	| InterfaceDeclaration
	| AliasDeclaration;
