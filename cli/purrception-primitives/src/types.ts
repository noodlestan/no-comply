export interface ImportedSymbol {
	at: string;
	name: string;
	alias: string;
	from: string;
}

export interface ExportedSymbol {
	at: string;
	name: string;
}

export type EntityDataBasePartial = {
	type: string;
	name: string;
};

export type EntityDataBase = EntityDataBasePartial & {
	symbols: {
		imported: Record<string, ImportedSymbol>;
		exported: Record<string, ExportedSymbol>;
	};
	[key: string]: unknown;
};

export type EntityExtractContext<T extends object> = {
	context: T;
	partial: EntityDataBasePartial;
};

export type EntityExtractResult<
	T extends EntityDataBase = EntityDataBase,
	C extends object = object,
> = {
	context: EntityExtractContext<C>;
	entity: T;
	warnings?: string[];
};
