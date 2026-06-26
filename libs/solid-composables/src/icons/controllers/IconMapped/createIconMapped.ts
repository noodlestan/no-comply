import type { IconValue } from '@no-comply/solid-contexts';
import { createExposable, exposeAPI, i } from '@no-comply/solid-contexts';
import { computedProps } from '@no-comply/solid-primitives';

import { $ICON_MAPPED } from './constants';
import type { IconMappedAPI, IconMappedProps } from './types';

export const createIconMapped = (props: IconMappedProps): IconMappedAPI => {
	const [locals, expose] = createExposable($ICON_MAPPED, props);

	const _icon = computedProps({
		icon: () => i(locals.map[locals.key] as IconValue),
	});

	return exposeAPI(expose, '_icon', {
		_icon,
	});
};
