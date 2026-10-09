import type { EntityDataBasePartial } from '@purrception/primitives';

import type { ContextEntityPartial } from './types.js';

export function createContextEntityPartial(
	partial: EntityDataBasePartial<'context'>,
	moduleName: string,
	path: string,
): ContextEntityPartial {
	return {
		...partial,
		module: moduleName,
		path,
	};
}
