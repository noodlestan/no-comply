import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps } from '@no-comply/solid-primitives';

import { $ICON_ACTION } from './constants';
import type { IconActionAPI, IconActionProps } from './types';

export const createIconAction = (props: IconActionProps): IconActionAPI => {
	const [locals, expose] = createExposable($ICON_ACTION, props);

	const $root = computedProps({
		'aria-label': () => locals.label,
	});

	const staticIconProps = {
		'aria-hidden': true as const,
	};
	const icon = computedProps(staticIconProps, {
		icon: () => locals.icon,
	});

	return exposeAPI(expose, '$root', {
		$root,
		icon,
	});
};
