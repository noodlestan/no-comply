import type { EntityDataBasePartial } from '@purrception/primitives';

import type { MixinEntityPartial } from './types';

export function createMixinEntityPartial(
	partial: EntityDataBasePartial<'mixin'>,
	moduleName: string,
	path: string,
): MixinEntityPartial {
	return {
		...partial,
		module: moduleName,
		path,
	};
}
