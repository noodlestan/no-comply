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

export type TypeDeclarationNode<K extends TypeExpressionNode = TypeExpressionNode> =
	DeclarationBase<'type'> & {
		node: K;
	};

export type InterfaceDeclarationNode = DeclarationBase<'interface'> & {
	generic?: TypeExpressionGeneric[];
	heritage?: (TypeExpressionNode | TypeRef)[];
	members: Record<string, ObjectLiteralTypeMember>;
};

export type AliasDeclarationNode = DeclarationBase<'alias'> & {
	target: TypeRef;
};

export type FunctionDeclarationNode = DeclarationBase<'function'> &
	FunctionTypeNode & {
		type?: TypeExpressionNode | TypeRef;
	};

export type ComponentDeclarationNode = DeclarationBase<'component'> &
	ComponentNode & {
		generic?: TypeExpressionGeneric[];
	};

export type DeclarationNode =
	| TypeDeclarationNode<TypeExpressionNode>
	| InterfaceDeclarationNode
	| AliasDeclarationNode
	| FunctionDeclarationNode
	| ComponentDeclarationNode;

export type DeclarationTypeNode =
	| TypeDeclarationNode<TypeExpressionNode>
	| InterfaceDeclarationNode
	| AliasDeclarationNode;
