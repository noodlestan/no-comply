import type {
	AliasTypeNode,
	ComponentNode,
	FunctionTypeNode,
	TypeExpressionNode,
	TypeRef,
} from '../node';

export type TypeDeclarationData<K extends TypeExpressionNode = TypeExpressionNode> = K & {
	name: string;
};

export interface TypeAliasData extends AliasTypeNode {
	name: string;
}

export interface FunctionData extends FunctionTypeNode {
	name: string;
	type?: TypeExpressionNode | TypeRef;
}

export interface ComponentData extends ComponentNode {
	name: string;
}
