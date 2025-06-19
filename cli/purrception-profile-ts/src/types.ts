export type TypeRefObject = {
	type: string;
	member?: string;
	generic?: string;
};

export type TypeRef = string | TypeRefObject;

export type TypeExpressionKind =
	| 'object'
	| 'intersection'
	| 'union'
	| 'function'
	| 'pick'
	| 'omit'
	| 'literal'
	| 'alias';

export interface TypeExpressionBase {
	kind: TypeExpressionKind;
	generic?: TypeExpressionGeneric[];
	description?: string;
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

export interface PickTypeNode extends TypeExpressionBase {
	kind: 'pick';
	source: TypeExpressionData | TypeRef;
	members: string[];
}

export interface OmitTypeNode extends TypeExpressionBase {
	kind: 'omit';
	source: TypeExpressionData | TypeRef;
	members: string[];
}

export interface LiteralTypeNode extends TypeExpressionBase {
	kind: 'literal';
	value: string | number | boolean;
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
}

export type FunctionReturnsData =
	| 'void'
	| {
			type: TypeRef | TypeExpressionData;
			description?: string;
	  };

export type TypeExpressionData =
	| ObjectLiteralTypeNode
	| IntersectionTypeNode
	| UnionTypeNode
	| PickTypeNode
	| OmitTypeNode
	| LiteralTypeNode
	| FunctionTypeNode;

export interface TypeDeclarationData extends TypeExpressionBase {
	name: string;
	description?: string;
}

export type FunctionData = TypeDeclarationData & FunctionTypeNode;
export type TypeAliasData = TypeDeclarationData & AliasTypeNode;
