import { createAlignedToFirstLineMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './SizedActionMixin.module.scss';
import { $SIZED_ACTION_MIXIN } from './constants';
import type { SizedActionMixinAPI, SizedActionMixinProps } from './types';

const defaultProps: PickRequired<SizedActionMixinProps, 'size'> = {
	size: 'normal',
};

export const createSizedActionMixin = (props: SizedActionMixinProps): SizedActionMixinAPI => {
	const [locals, expose, compose] = createExposable($SIZED_ACTION_MIXIN, props);

	const size = () => locals.size ?? defaultProps.size;

	const classList = createClassList(styles, () => [`SizedAction`, `size-${size()}`]);

	const { $root: $alignedRoot } = compose(createAlignedToFirstLineMixin(locals, classList));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($alignedRoot, $root),
		size,
	});
};
