export type TypeMeta =
	| string
	| {
			type: string;
			generic?: string;
	  };

export type ParamMeta = {
	name: string;
	type: TypeMeta;
	optional?: boolean;
};

export type GenericMeta = {
	name: string;
	constraint: TypeMeta;
	default?: TypeMeta;
};

export type FunctionMeta = {
	name: string;
	generic?: GenericMeta;
	params: ParamMeta[];
	description: string;
	returns: TypeMeta;
};
