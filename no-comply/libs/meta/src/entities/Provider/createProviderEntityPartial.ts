import type { EntityDataBasePartial } from '@purrception/primitives';

import type { ProviderEntityPartial } from './types';

export function createProviderEntityPartial(
	partial: EntityDataBasePartial<'provider'>,
	moduleName: string,
	path: string,
): ProviderEntityPartial {
	return {
		...partial,
		module: moduleName,
		path,
	};
}
