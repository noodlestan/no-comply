import type { DeclarationJsDocData, JSDocTags } from '../jsdoc';

export type TypeRefObject = {
	type: string;
	member?: string;
	params?: (TypeRef | TypeExpressionNode)[];
};

export type TypeRef = string | TypeRefObject;

export type TypeExpressionKind =
	| 'object'
	| 'array'
	| 'tuple'
	| 'intersection'
	| 'union'
	| 'function'
	| 'component'
	| 'pick'
	| 'omit'
	| 'literal'
	| 'template-literal'
	| 'operator'
	| 'mapped'
	| 'conditional'
	| 'infer';

export interface TypeExpressionBase<K extends TypeExpressionKind> extends DeclarationJsDocData {
	kind: K;
	generic?: TypeExpressionGeneric[];
}

export interface TypeExpressionGeneric {
	name: string;
	constraint: TypeRef;
	default?: TypeRef;
}

export interface ObjectLiteralTypeMember extends DeclarationJsDocData {
	type: TypeExpressionNode | TypeRef;
	optional?: boolean;
}

export interface ObjectLiteralTypeNode extends TypeExpressionBase<'object'> {
	kind: 'object';
	members: Record<string, ObjectLiteralTypeMember>;
}

export interface ArrayTypeNode extends TypeExpressionBase<'array'> {
	kind: 'array';
	elements: TypeExpressionNode | TypeRef;
}

export type NamedTupleTypeElement = {
	name: string;
	type: TypeExpressionNode | TypeRef;
	optional?: boolean;
};

export type TupleTypeElement = TypeExpressionNode | TypeRef | NamedTupleTypeElement;

export interface TupleTypeNode extends TypeExpressionBase<'tuple'> {
	kind: 'tuple';
	elements: TupleTypeElement[];
}

export interface IntersectionTypeNode extends TypeExpressionBase<'intersection'> {
	kind: 'intersection';
	entries: (TypeExpressionNode | TypeRef)[];
}

export interface UnionTypeNode extends TypeExpressionBase<'union'> {
	kind: 'union';
	entries: (TypeExpressionNode | TypeRef)[];
}

export interface FunctionTypeParam {
	name: string;
	type: TypeRef | TypeExpressionNode;
	optional?: boolean;
	description?: string;
	tags?: JSDocTags;
}

export type FunctionTypeReturns = {
	type: TypeRef | TypeExpressionNode;
	description?: string;
	asserts?: {
		parameter: string;
		type: TypeExpressionNode | TypeRef;
	};
};

export interface FunctionTypeNode extends TypeExpressionBase<'function'> {
	kind: 'function';
	params?: FunctionTypeParam[];
	returns?: FunctionTypeReturns;
}

export interface ComponentNode extends TypeExpressionBase<'component'> {
	kind: 'component';
	props: TypeExpressionNode | TypeRef | undefined;
}

export interface PickTypeNode extends TypeExpressionBase<'pick'> {
	kind: 'pick';
	source: TypeExpressionNode | TypeRef;
	members: UnionTypeNode | TypeRef;
}

export interface OmitTypeNode extends TypeExpressionBase<'omit'> {
	kind: 'omit';
	source: TypeExpressionNode | TypeRef;
	members: UnionTypeNode | TypeRef;
}

export interface LiteralTypeNode extends TypeExpressionBase<'literal'> {
	kind: 'literal';
	value: string | number | boolean;
}

export interface TemplateLiteralTypeNode extends TypeExpressionBase<'template-literal'> {
	kind: 'template-literal';
	head: string;
	spans: Array<{
		type: TypeExpressionNode | TypeRef;
		text: string;
	}>;
}

export interface OperatorTypeNode extends TypeExpressionBase<'operator'> {
	kind: 'operator';
	operator: 'readonly' | 'keyof' | string;
	operand: TypeExpressionNode | TypeRef;
}

export interface MappedTypeNode extends TypeExpressionBase<'mapped'> {
	kind: 'mapped';
	param: string;
	constraint: string; // Usually K
	valueType: string; // Usually T[K] or similar
	optional: boolean;
	readonly: boolean;
}

export interface ConditionalTypeNode extends TypeExpressionBase<'conditional'> {
	kind: 'conditional';
	checkType: TypeExpressionNode | TypeRef;
	extendsType: TypeExpressionNode | TypeRef;
	trueType: TypeExpressionNode | TypeRef;
	falseType: TypeExpressionNode | TypeRef;
}

export interface InferTypeNode extends TypeExpressionBase<'infer'> {
	kind: 'infer';
	name: string;
}

export type TypeExpressionNode =
	| ObjectLiteralTypeNode
	| ArrayTypeNode
	| TupleTypeNode
	| IntersectionTypeNode
	| UnionTypeNode
	| FunctionTypeNode
	| PickTypeNode
	| OmitTypeNode
	| LiteralTypeNode
	| TemplateLiteralTypeNode
	| MappedTypeNode
	| OperatorTypeNode
	| ConditionalTypeNode
	| InferTypeNode;
