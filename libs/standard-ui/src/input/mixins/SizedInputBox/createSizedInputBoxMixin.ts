import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './SizedInputBoxMixin.module.scss';
import { $SIZED_INPUT_BOX_MIXIN } from './constants';
import type { SizedInputBoxMixinAPI, SizedInputBoxMixinProps } from './types';

const defaultProps: PickRequired<SizedInputBoxMixinProps, 'size'> = {
	size: 'normal',
};

export const createSizedInputBoxMixin = (props: SizedInputBoxMixinProps): SizedInputBoxMixinAPI => {
	const [locals, expose] = createExposable($SIZED_INPUT_BOX_MIXIN, props);

	const size = () => locals.size ?? defaultProps.size;
	const classList = createClassList(styles, () => [`SizedInputBox`, `size-${size()}`]);

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
		size,
	});
};
