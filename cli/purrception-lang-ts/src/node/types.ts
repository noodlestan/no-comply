import type { EntityDataBase } from '@purrception/primitives';

import type { DeclarationJsDocData, JSDocTags } from '../jsdoc';

export type TypeExpressionKind =
	| 'ref'
	| 'primitive'
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

export interface TypeResolutionMeta {
	ref: string;
	entity: EntityDataBase;
}

export interface TypeExpressionBase<K extends TypeExpressionKind> extends DeclarationJsDocData {
	kind: K;
	generic?: TypeExpressionGeneric[];
	_source?: TypeResolutionMeta;
}

export interface TypeExpressionGeneric {
	name: string;
	constraint: TypeRefNode | PrimitiveNode;
	default?: TypeRefNode;
}

export interface ObjectLiteralTypeMember extends DeclarationJsDocData {
	type: TypeExpressionNode;
	optional?: boolean;
	readonly?: boolean;
	_source?: TypeResolutionMeta;
}

export interface ObjectIndexSignature extends DeclarationJsDocData {
	keyName: string;
	keyType: TypeExpressionNode;
	valueType: TypeExpressionNode;
	readonly?: boolean;
	_source?: TypeResolutionMeta;
}

export interface ObjectMappedSignature extends DeclarationJsDocData {
	paramName: string;
	constraint: TypeExpressionNode;
	valueType: TypeExpressionNode;
	optional?: boolean;
	readonly?: boolean;
	_source?: TypeResolutionMeta;
}

export interface TypeRefNode extends TypeExpressionBase<'ref'> {
	ref: string;
	member?: string;
	params?: TypeExpressionNode[];
}

export interface PrimitiveNode extends TypeExpressionBase<'primitive'> {
	primitive: string;
	member?: string;
	params?: TypeExpressionNode[];
}

export interface ObjectLiteralTypeNode extends TypeExpressionBase<'object'> {
	kind: 'object';
	members: Record<string, ObjectLiteralTypeMember>;
	indexSignatures?: ObjectIndexSignature[];
	mappedSignatures?: ObjectMappedSignature[];
}

export interface ArrayTypeNode extends TypeExpressionBase<'array'> {
	kind: 'array';
	elements: TypeExpressionNode;
}

export type NamedTupleTypeElement = {
	name: string;
	type: TypeExpressionNode;
	optional?: boolean;
};

export type TupleTypeElement = TypeExpressionNode | NamedTupleTypeElement;

export interface TupleTypeNode extends TypeExpressionBase<'tuple'> {
	kind: 'tuple';
	elements: TupleTypeElement[];
}

export interface IntersectionTypeNode extends TypeExpressionBase<'intersection'> {
	kind: 'intersection';
	entries: TypeExpressionNode[];
}

export interface UnionTypeNode extends TypeExpressionBase<'union'> {
	kind: 'union';
	entries: TypeExpressionNode[];
}

export interface FunctionTypeParam {
	name: string;
	type: TypeExpressionNode;
	optional?: boolean;
	description?: string;
	tags?: JSDocTags;
}

export type FunctionTypeReturns = {
	type: TypeExpressionNode;
	description?: string;
	asserts?: {
		parameter: string;
		type: TypeExpressionNode;
	};
};

export interface FunctionTypeNode extends TypeExpressionBase<'function'> {
	kind: 'function';
	params?: FunctionTypeParam[];
	returns?: FunctionTypeReturns;
}

export interface ComponentNode extends TypeExpressionBase<'component'> {
	kind: 'component';
	props: TypeExpressionNode | undefined;
}

export interface PickTypeNode extends TypeExpressionBase<'pick'> {
	kind: 'pick';
	source: TypeExpressionNode;
	members: UnionTypeNode | TypeRefNode;
}

export interface OmitTypeNode extends TypeExpressionBase<'omit'> {
	kind: 'omit';
	source: TypeExpressionNode;
	members: UnionTypeNode | TypeRefNode;
}

export interface LiteralTypeNode extends TypeExpressionBase<'literal'> {
	kind: 'literal';
	value: string | number | boolean;
}

export interface TemplateLiteralTypeNode extends TypeExpressionBase<'template-literal'> {
	kind: 'template-literal';
	head: string;
	spans: Array<{
		type: TypeExpressionNode;
		text: string;
	}>;
}

export interface OperatorTypeNode extends TypeExpressionBase<'operator'> {
	kind: 'operator';
	operator: 'readonly' | 'keyof' | string;
	operand: TypeExpressionNode;
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
	checkType: TypeExpressionNode;
	extendsType: TypeExpressionNode;
	trueType: TypeExpressionNode;
	falseType: TypeExpressionNode;
}

export interface InferTypeNode extends TypeExpressionBase<'infer'> {
	kind: 'infer';
	name: string;
}

export type TypeExpressionNode =
	| TypeRefNode
	| PrimitiveNode
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
