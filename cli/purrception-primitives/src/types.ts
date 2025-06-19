export type EntityExtractMeta = {
	type: string;
	name: string;
	[key: string]: unknown;
};

export type EntityExtractContext = {
	context: unknown;
	entityMeta: EntityExtractMeta;
};

export type EntityData = {
	type: string;
	name: string;
	[key: string]: unknown;
};

export type EntityExtractResult = {
	context: EntityExtractContext;
	entity: EntityData;
	warnings?: string[];
};
