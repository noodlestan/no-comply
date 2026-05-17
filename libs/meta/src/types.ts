import type { ModuleEntityData, NoComplyEntityData } from '@no-comply/meta-entities';

export interface NoComplyMetaAPI {
	getEntities(): NoComplyEntityData[];
	getEntityMaybe<T extends NoComplyEntityData>(
		pkg: string,
		type: string,
		name: string,
	): T | undefined;
	getEntity<T extends NoComplyEntityData>(pkg: string, type: string, name: string): T;
	getPackageNames: () => string[];
	hasPackage: (pkg: string) => boolean;
	getPackageModuleNames: (pkg: string) => string[];
	packageHasModule: (pkg: string, mod: string) => boolean;
	getModuleMaybe: (pkg: string, mod: string) => ModuleEntityData | undefined;
	getModuleSubModuleNames: (pkg: string, mod: string) => string[];
	getModuleEntities: (pkg: string, mod: string) => NoComplyEntityData[];
}
