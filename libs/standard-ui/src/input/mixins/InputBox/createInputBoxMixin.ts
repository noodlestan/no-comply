import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, staticClassList } from '@no-comply/solid-primitives';

import { createFocusRingMixin, createFocusRingOffsetMixin } from '../../../focus';

import styles from './InputBoxMixin.module.scss';
import { $INPUT_BOX_MIXIN } from './constants';
import type { InputBoxMixinAPI, InputBoxMixinProps } from './types';

export const createInputBoxMixin = (props: InputBoxMixinProps): InputBoxMixinAPI => {
	const [locals, expose, compose] = createExposable($INPUT_BOX_MIXIN, props);

	const focusRingMixnProps = computedProps({ compact: () => locals.disabled });
	const { $root: $focusRingMixinRoot } = compose(createFocusRingMixin(focusRingMixnProps));
	const { $root: $focusRingOffsetMixinRoot } = compose(
		createFocusRingOffsetMixin(focusRingMixnProps),
	);

	const classList = staticClassList(styles, 'InputBox');

	const $root = {
		classList,
	};

	return exposeAPI(expose, '$root', {
		$root: combineProps($focusRingMixinRoot, $focusRingOffsetMixinRoot, $root),
	});
};
