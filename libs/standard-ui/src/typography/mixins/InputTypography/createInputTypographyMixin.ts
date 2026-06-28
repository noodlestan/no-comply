import { createTypographyMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './InputTypographyMixin.module.scss';
import { $INPUT_TYPOGRAPHY_MIXIN } from './constants';
import type { InputTypographyMixinAPI, InputTypographyMixinProps } from './types';

const defaultProps: PickRequired<InputTypographyMixinProps, 'variant'> = {
	variant: 'normal',
};

export const createInputTypographyMixin = (
	props: InputTypographyMixinProps,
): InputTypographyMixinAPI => {
	const [locals, expose, compose] = createExposable($INPUT_TYPOGRAPHY_MIXIN, props);

	const { $root: $typographyMixinRoot } = compose(createTypographyMixin(locals));

	const variant = () => locals.variant ?? defaultProps.variant;
	const classList = createClassList(styles, () => ['InputTypography', `variant-${variant()}`]);
	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($typographyMixinRoot, $root),
	});
};
