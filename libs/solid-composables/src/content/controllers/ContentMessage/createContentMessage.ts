import { createAriaRegion } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { $CONTENT_MESSAGE } from './constants';
import type { ContentMessageAPI, ContentMessageProps } from './types';

export const createContentMessage = (props: ContentMessageProps): ContentMessageAPI => {
	const [locals, expose, compose] = createExposable($CONTENT_MESSAGE, props);

	const {
		$root: $regionRoot,
		$label: $regionLabel,
		$description: $regionDescription,
	} = compose(createAriaRegion(locals, 'note'));

	const $root = computedProps({
		'data-message-variant': () => locals.variant,
	});

	const icon = () => locals.icon ?? locals.iconMap?.[locals.variant];

	const _icon = computedProps({ icon });

	const hasIcon = () => Boolean(_icon.icon);

	return exposeAPI(expose, '$root', {
		$root: combineProps($regionRoot, $root),
		$label: $regionLabel,
		$description: $regionDescription,
		_icon,
		hasIcon,
	});
};
