import type { DeclarationJsDocData, JSDocTags } from './jsdoc';

export type TypeRefObject = {
	type: string;
	member?: string;
	params?: (TypeRef | TypeExpressionData)[];
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
	| 'infer'
	| 'alias';

export interface TypeExpressionBase extends DeclarationJsDocData {
	kind: TypeExpressionKind;
	generic?: TypeExpressionGeneric[];
}

export interface TypeExpressionGeneric {
	name: string;
	constraint: TypeRef;
	default?: TypeRef;
}

export type ObjectLiteralTypeMember = (TypeExpressionData | TypeRefObject) & {
	optional?: boolean;
};

export interface ObjectLiteralTypeNode extends TypeExpressionBase {
	kind: 'object';
	members: Record<string, ObjectLiteralTypeMember>;
}

export interface ArrayTypeNode extends TypeExpressionBase {
	kind: 'array';
	elements: TypeExpressionData | TypeRef;
}

export type NamedTupleTypeElement = {
	name: string;
	type: TypeExpressionData | TypeRef;
	optional?: boolean;
};

export type TupleTypeElement = TypeExpressionData | TypeRef | NamedTupleTypeElement;

export interface TupleTypeNode extends TypeExpressionBase {
	kind: 'tuple';
	elements: TupleTypeElement[];
}

export interface IntersectionTypeNode extends TypeExpressionBase {
	kind: 'intersection';
	entries: (TypeExpressionData | TypeRef)[];
}

export interface UnionTypeNode extends TypeExpressionBase {
	kind: 'union';
	entries: (TypeExpressionData | TypeRef)[];
}

export interface FunctionTypeNode extends TypeExpressionBase {
	kind: 'function';
	params: ParamData[];
	returns: FunctionReturnsData;
}

export interface ComponentNode extends TypeExpressionBase {
	kind: 'component';
	props: TypeExpressionData | TypeRef | undefined;
}

export interface PickTypeNode extends TypeExpressionBase {
	kind: 'pick';
	source: TypeExpressionData | TypeRef;
	members: TypeExpressionData | TypeRef;
}

export interface OmitTypeNode extends TypeExpressionBase {
	kind: 'omit';
	source: TypeExpressionData | TypeRef;
	members: TypeExpressionData | TypeRef;
}

export interface LiteralTypeNode extends TypeExpressionBase {
	kind: 'literal';
	value: string | number | boolean;
}

export interface TemplateLiteralTypeNode extends TypeExpressionBase {
	kind: 'template-literal';
	head: string;
	spans: Array<{
		type: TypeExpressionData | TypeRef;
		text: string;
	}>;
}

export interface OperatorTypeNode extends TypeExpressionBase {
	kind: 'operator';
	operator: 'readonly' | 'keyof' | string;
	operand: TypeExpressionData | TypeRef;
}

export interface MappedTypeNode extends TypeExpressionBase {
	kind: 'mapped';
	param: string;
	constraint: string; // Usually K
	valueType: string; // Usually T[K] or similar
	optional: boolean;
	readonly: boolean;
}

export interface ConditionalTypeNode extends TypeExpressionBase {
	kind: 'conditional';
	checkType: TypeExpressionData | TypeRef;
	extendsType: TypeExpressionData | TypeRef;
	trueType: TypeExpressionData | TypeRef;
	falseType: TypeExpressionData | TypeRef;
}

export interface InferTypeNode extends TypeExpressionBase {
	kind: 'infer';
	name: string;
}

export interface AliasTypeNode extends TypeExpressionBase {
	kind: 'alias';
	target: TypeRef;
}

export interface ParamData {
	name: string;
	type: TypeRef | TypeExpressionData;
	optional?: boolean;
	description?: string;
	tags?: JSDocTags;
}

export type FunctionReturnsData =
	| 'void'
	| {
			type: TypeRef | TypeExpressionData;
			description?: string;
			asserts?: {
				parameter: string;
				type: TypeExpressionData | TypeRef;
			};
	  };

export type TypeExpressionData =
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

export interface TypeDeclarationData extends TypeExpressionBase {
	name: string;
}

export type FunctionData = TypeDeclarationData &
	FunctionTypeNode & {
		type: TypeExpressionData | TypeRef | undefined;
	};

export type ComponentData = TypeDeclarationData & ComponentNode;

export type TypeAliasData = TypeDeclarationData & AliasTypeNode;
