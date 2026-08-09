import type { EntityDataBasePartial } from '@purrception/primitives';

import type { ServiceEntityPartial } from './types';

export function createServiceEntityPartial(
	partial: EntityDataBasePartial<'service'>,
	moduleName: string,
	path: string,
): ServiceEntityPartial {
	return {
		...partial,
		module: moduleName,
		path,
	};
}
