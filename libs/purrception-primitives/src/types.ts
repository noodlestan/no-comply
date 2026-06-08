export type ImportedSymbol = {
	at: string;
	name: string;
	alias: string;
	from: string;
};

export type DeclaredSymbol = {
	at: string;
	lang: string;
	name: string;
	private: boolean;
};

export type LanguageDeclaredSymbol<L extends string> = DeclaredSymbol & {
	lang: L;
};

export type EntityDataBasePartial = {
	type: string;
	name: string;
	package: string;
};

export type EntityDataBase = EntityDataBasePartial & {
	symbols: {
		imported: Record<string, ImportedSymbol>;
		declared: Record<string, DeclaredSymbol>;
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
