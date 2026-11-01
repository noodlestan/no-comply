import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { createBadgeMixin } from '../../mixins';

import { $BADGE } from './constants';
import type { BadgeAPI, BadgeProps } from './types';

export const createBadge = (props: BadgeProps): BadgeAPI => {
	const [locals, expose, compose] = createExposable($BADGE, props);

	const { $root } = compose(createBadgeMixin(locals));

	return exposeAPI(expose, '$root', {
		$root,
	});
};
