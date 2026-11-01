import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';

import { createSizedContentMixin } from '../../../content';

import styles from './SizedActionMixin.module.scss';
import { $SIZED_ACTION_MIXIN } from './constants';
import type { SizedActionMixinAPI, SizedActionMixinProps } from './types';

export const createSizedActionMixin = (props: SizedActionMixinProps): SizedActionMixinAPI => {
	const [locals, expose, compose] = createExposable($SIZED_ACTION_MIXIN, props);

	const { $root: $sizedContentRoot, size, scale } = compose(createSizedContentMixin(locals));

	const classList = createClassList(styles, () => [`SizedAction`, `size-${size()}`]);

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($sizedContentRoot, $root),
		size,
		scale,
	});
};
