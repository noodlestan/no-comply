import { createTypographyMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import type { DisplayLevel, DisplayVariant } from '../../types';

import styles from './DisplayMixin.module.scss';
import { $DISPLAY_MIXIN } from './constants';
import type { DisplayMixinAPI, DisplayMixinProps } from './types';

const MAP_LEVEL_TO_VARIANT: Record<DisplayLevel, DisplayVariant> = {
	1: 'xl',
	2: 'l',
	3: 'm',
	4: 's',
	5: 'xs',
};

const defaultProps: PickRequired<DisplayMixinProps, 'level' | 'variant'> = {
	level: 3,
	variant: 'm',
};

export const createDisplayMixin = (props: DisplayMixinProps): DisplayMixinAPI => {
	const [locals, expose, compose] = createExposable($DISPLAY_MIXIN, props);

	const { $root: $textMixinRoot } = compose(createTypographyMixin(locals));

	const level = () => locals.level ?? defaultProps.level;
	const variant = () => locals.variant ?? MAP_LEVEL_TO_VARIANT[level()];
	const classList = createClassList(styles, () => ['Display', `variant-${variant()}`]);
	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($textMixinRoot, $root),
		level,
	});
};
