import { createTypographyMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './LabelMixin.module.scss';
import { $LABEL_MIXIN } from './constants';
import type { LabelMixinAPI, LabelMixinProps } from './types';

const defaultProps: PickRequired<LabelMixinProps, 'variant'> = {
	variant: 'normal',
};

export const createLabelMixin = (props: LabelMixinProps): LabelMixinAPI => {
	const [locals, expose, compose] = createExposable($LABEL_MIXIN, props);

	const { $root: $typographyMixinRoot } = compose(createTypographyMixin(locals));

	const variant = () => locals.variant ?? defaultProps.variant;
	const classList = createClassList(styles, () => ['Label', `variant-${variant()}`]);
	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($typographyMixinRoot, $root),
	});
};
