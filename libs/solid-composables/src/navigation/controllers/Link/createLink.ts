import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createPressable } from '../../../action';
import { isExternalURL, linkRelFor } from '../../helpers';

import { $LINK } from './constants';
import type { LinkAPI, LinkProps } from './types';

export const createLink = (props: LinkProps): LinkAPI => {
	const [locals, expose] = createExposable($LINK, props);

	const { $root: $pressabeRoot } = createPressable(locals);

	const href = () => (locals.disabled ? undefined : locals.href);
	const target = () => locals.target;
	const rel = () => linkRelFor(locals.href, locals.rel);
	const tabIndex = () => (locals.disabled ? -1 : undefined);

	const $root = computedProps({
		href,
		target,
		rel,
		tabIndex,
		'aria-label': () => locals.label,
		'data-external': () => (isExternalURL(locals.href) ? '' : undefined),
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($pressabeRoot, $root),
	});
};
