export type EntityDataBase = {
	type: string;
	name: string;
	[key: string]: unknown;
};

export type EntityExtractContext<T extends object> = {
	context: T;
	entity: EntityDataBase;
};

export type EntityExtractResult<
	T extends EntityDataBase = EntityDataBase,
	C extends object = object,
> = {
	context: EntityExtractContext<C>;
	entity: T;
	warnings?: string[];
};
