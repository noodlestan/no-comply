import { createExposable, exposeAPI, l } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createIconMapped } from '../../../icons/controllers/IconMapped';

import { $TOGGLE_ACTION } from './constants';
import type { ToggleActionAPI, ToggleActionProps } from './types';

export const createToggleAction = (props: ToggleActionProps): ToggleActionAPI => {
	const [locals, expose, compose] = createExposable($TOGGLE_ACTION, props);

	const map = computedProps({
		false: () => locals.icons.off,
		true: () => locals.icons.on,
	});

	const iconMappedProps = computedProps(
		{ map },
		{
			key: () => String(Boolean(locals.value)),
		},
	);
	const { _icon: _iconMapped } = compose(createIconMapped(iconMappedProps));

	const _icon = computedProps({
		label: () => l(locals.value ? locals.labels.on : locals.labels.off),
	});

	return exposeAPI(expose, '_icon', {
		_icon: combineProps(_iconMapped, _icon),
	});
};
