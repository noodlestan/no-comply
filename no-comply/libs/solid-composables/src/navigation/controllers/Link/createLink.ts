import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { attributeBoolean, combineProps, computedProps } from '@no-comply/solid-primitives';

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

	const $root = computedProps({
		href,
		target,
		rel,
		'data-external': () => attributeBoolean(isExternalURL(locals.href)),
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($pressabeRoot, $root),
	});
};
