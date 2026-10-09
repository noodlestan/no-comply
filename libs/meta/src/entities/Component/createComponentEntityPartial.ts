import type { EntityDataBasePartial } from '@purrception/primitives';

import type { ComponentEntityPartial } from './types.js';

export function createComponentEntityPartial(
	partial: EntityDataBasePartial<'component'>,
	moduleName: string,
	path: string,
): ComponentEntityPartial {
	return {
		...partial,
		module: moduleName,
		path,
	};
}
