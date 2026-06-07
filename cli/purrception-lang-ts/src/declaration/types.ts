import type { ExportedSymbol } from '@purrception/primitives';

import type { DeclarationJsDocData } from '../jsdoc';
import type {
	ComponentNode,
	FunctionTypeNode,
	ObjectLiteralTypeMember,
	TypeExpressionGeneric,
	TypeExpressionNode,
} from '../node';

export type DeclarationKind = 'type' | 'interface' | 'function' | 'component';

export type DeclarationBase<K extends DeclarationKind> = ExportedSymbol &
	DeclarationJsDocData & {
		kind: K;
	};

export type TypeExpressionDeclaration<K extends TypeExpressionNode = TypeExpressionNode> =
	DeclarationBase<'type'> & {
		node: K;
	};

export type InterfaceDeclaration = DeclarationBase<'interface'> & {
	generic?: TypeExpressionGeneric[];
	heritage?: TypeExpressionNode[];
	members: Record<string, ObjectLiteralTypeMember>;
};

export type FunctionDeclaration = DeclarationBase<'function'> &
	FunctionTypeNode & {
		type?: TypeExpressionNode;
	};

export type ComponentDeclaration = DeclarationBase<'component'> &
	ComponentNode & {
		generic?: TypeExpressionGeneric[];
	};

export type Declaration =
	| TypeExpressionDeclaration<TypeExpressionNode>
	| InterfaceDeclaration
	| FunctionDeclaration
	| ComponentDeclaration;

export type TypeDeclaration = TypeExpressionDeclaration<TypeExpressionNode> | InterfaceDeclaration;
