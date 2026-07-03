import type { EntityDataBase } from '@purrception/primitives';

import type { ModuleEntityData, NoComplyEntityData } from './entities';

export type NoComplyMetaOptions = {
	makeEntityHref?: (entity: NoComplyEntityData, symbol?: string) => string;
};

export type NoComplyMetaAPI = {
	getEntities(): NoComplyEntityData[];
	getEntityMaybe<T extends NoComplyEntityData>(
		pkg: string,
		type: string,
		name: string,
	): T | undefined;
	getEntity<T extends NoComplyEntityData>(pkg: string, type: string, name: string): T;
	resolveSymbolEntity: (entity: EntityDataBase, token: string) => NoComplyEntityData | undefined;
	getPackageNames: () => string[];
	hasPackage: (pkg: string) => boolean;
	getPackageModuleNames: (pkg: string) => string[];
	packageHasModule: (pkg: string, mod: string) => boolean;
	getModuleMaybe: (pkg: string, mod: string) => ModuleEntityData | undefined;
	getModuleSubModuleNames: (pkg: string, mod: string) => string[];
	getModuleEntities: (pkg: string, mod: string) => NoComplyEntityData[];

	/**
	 * Resolves an entity based on a string expression
	 *
	 * Patterns:
	 * - `name` => matches just by name, will warn to console if more than on entity matched
	 * - `package:name` =>
	 * - `type:name` =>
	 * - `package:type:name` => fastest, uses entities index.
	 */
	resolveEntityExpression: (expression: string) => NoComplyEntityData | undefined;

	/**
	 * Resolves a linke from a text pattern.
	 *
	 * @link {see #resolveEntityExpression for patterns}
	 */
	resolveLink: (text: string) => [displayName: string, href: string] | undefined;
};
