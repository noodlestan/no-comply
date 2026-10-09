import type { EntityDataBasePartial } from '@purrception/primitives';

import type { ControllerEntityPartial } from './types.js';

export function createControllerEntityPartial(
	partial: EntityDataBasePartial<'controller'>,
	moduleName: string,
	path: string,
): ControllerEntityPartial {
	return {
		...partial,
		module: moduleName,
		path,
	};
}
