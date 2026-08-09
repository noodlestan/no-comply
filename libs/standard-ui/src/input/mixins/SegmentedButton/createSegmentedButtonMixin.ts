import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, computedProps, createClassList } from '@no-comply/solid-primitives';

import type { SizedActionMixinProps } from '../../../action';

import styles from './SegmentedButtonMixin.module.scss';
import { $SEGMENTED_BUTTON_MIXIN } from './constants';
import type { SegmentedButtonMixinAPI, SegmentedButtonMixinProps } from './types';

const defaultProps: PickRequired<SizedActionMixinProps, 'size'> = {
	size: 'normal',
};

export const createSegmentedButtonMixin = (
	props: SegmentedButtonMixinProps,
): SegmentedButtonMixinAPI => {
	const [locals, expose] = createExposable($SEGMENTED_BUTTON_MIXIN, props);

	const size = () => locals.size ?? defaultProps.size;
	const classList = createClassList(styles, () => [`SegmentedButton`]);

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
		size,
	});
};
