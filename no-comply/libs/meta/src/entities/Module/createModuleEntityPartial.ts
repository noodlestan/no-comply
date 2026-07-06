import type { EntityDataBasePartial } from '@purrception/primitives';

import type { ModuleEntityPartial } from './types';

export function createModuleEntityPartial(
	partial: EntityDataBasePartial<'module'>,
	path: string,
): ModuleEntityPartial {
	return {
		...partial,
		module: undefined,
		path,
	};
}
