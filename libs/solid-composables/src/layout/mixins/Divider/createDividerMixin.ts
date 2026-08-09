import { createAriaSeparator } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './DividerMixin.module.scss';
import { $DIVIDER_MIXIN } from './constants';
import type { DividerMixinAPI, DividerMixinProps } from './types';

export const createDividerMixin = (props: DividerMixinProps): DividerMixinAPI => {
	const [locals, expose] = createExposable($DIVIDER_MIXIN, props);

	const { $root: $separatorRoot } = createAriaSeparator(locals);
	const classList = staticClassList(styles, 'Divider');

	const $root = {
		classList,
		'data-separator': '' as const,
	};

	return exposeAPI(expose, '$root', {
		$root: combineProps($root, $separatorRoot),
	});
};
