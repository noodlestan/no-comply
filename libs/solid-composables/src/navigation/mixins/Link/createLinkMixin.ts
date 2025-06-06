import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './LinkMixin.module.scss';
import { $LINK_MIXIN } from './constants';
import type { LinkMixinAPI } from './types';

export const createLinkMixin = (): LinkMixinAPI => {
	const [, expose] = createExposable($LINK_MIXIN);

	const $root = {
		classList: staticClassList(styles, 'Link'),
	};

	return exposeAPI(expose, '$root', {
		$root,
	});
};
