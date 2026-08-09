import { createAlignedToFirstLineMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './SizedIconMixin.module.scss';
import { $SIZED_ICON_MIXIN } from './constants';
import type { SizedIconMixinAPI, SizedIconMixinProps } from './types';

const defaultProps: PickRequired<SizedIconMixinProps, 'size'> = {
	size: 'normal',
};

export const createSizedIconMixin = (props: SizedIconMixinProps): SizedIconMixinAPI => {
	const [locals, expose, compose] = createExposable($SIZED_ICON_MIXIN, props);

	const size = () => locals.size ?? defaultProps.size;

	const classList = createClassList(styles, () => ['SizedIcon', `size-${size()}`]);

	const { $root: $alignedRoot } = compose(createAlignedToFirstLineMixin(locals, classList));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($alignedRoot, $root),
		size,
	});
};
