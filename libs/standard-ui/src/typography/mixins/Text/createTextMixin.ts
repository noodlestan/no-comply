import { createTextMixin as createHeadlessTextMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './TextMixin.module.scss';
import { $TEXT_MIXIN } from './constants';
import type { TextMixinAPI, TextMixinProps } from './types';

const defaultProps: PickRequired<TextMixinProps, 'variant'> = {
	variant: 'normal',
};

export const createTextMixin = (props: TextMixinProps): TextMixinAPI => {
	const [locals, expose, compose] = createExposable($TEXT_MIXIN, props);

	const { $root: $textMixinRoot } = compose(createHeadlessTextMixin(locals));

	const variant = () => locals.variant ?? defaultProps.variant;
	const classList = createClassList(styles, () => ['Text', `variant-${variant()}`]);
	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($textMixinRoot, $root),
	});
};
