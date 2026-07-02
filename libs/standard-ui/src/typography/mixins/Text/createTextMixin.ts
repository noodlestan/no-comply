import { createSizedTypographyMixin, createTypographyMixin } from '@no-comply/solid-composables';
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

const defaultProps: PickRequired<TextMixinProps, 'size'> = {
	size: 'normal',
};

export const createTextMixin = (props: TextMixinProps): TextMixinAPI => {
	const [locals, expose, compose] = createExposable($TEXT_MIXIN, props);

	const size = () => locals.size ?? defaultProps.size;

	const classList = createClassList(styles, () => ['Text', `size-${size()}`]);

	const { $root: $typographyMixinRoot } = compose(createTypographyMixin(locals));

	const { $root: $sizedTypographyRoot } = compose(createSizedTypographyMixin(locals, classList));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($typographyMixinRoot, $sizedTypographyRoot, $root),
	});
};
