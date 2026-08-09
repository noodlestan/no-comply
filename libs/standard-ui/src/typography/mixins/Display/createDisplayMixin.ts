import { createSizedTypographyMixin, createTypographyMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';
// import { createEffect } from 'solid-js';

import styles from './DisplayMixin.module.scss';
import { $DISPLAY_MIXIN } from './constants';
import { MAP_LEVEL_TO_SIZE_OR_VARIANT as MAP_LEVEL } from './private';
import type { DisplayMixinAPI, DisplayMixinProps } from './types';

const defaultProps: PickRequired<DisplayMixinProps, 'level' | 'size'> = {
	level: 3,
	size: 'medium',
};

export const createDisplayMixin = (props: DisplayMixinProps): DisplayMixinAPI => {
	const [locals, expose, compose] = createExposable($DISPLAY_MIXIN, props);

	const useVariant = () => Boolean(locals.variant);

	const level = () => locals.level ?? defaultProps.level;
	const variant = () => locals.variant ?? MAP_LEVEL[level()][1];
	const size = () => (!useVariant() ? (locals.size ?? MAP_LEVEL[level()][0]) : undefined);

	const classList = createClassList(styles, () => {
		return {
			Display: true,
			[`size-${size()}`]: Boolean(size()),
			[`variant-${variant()}`]: Boolean(variant()),
		};
	});

	const { $root: $typographyMixinRoot } = compose(createTypographyMixin(locals));

	const { $root: $sizedTypographyRoot } = compose(createSizedTypographyMixin(locals, classList));

	// createEffect(() => console.log({ ...props }, { ...classList() }));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($typographyMixinRoot, $sizedTypographyRoot, $root),
		level,
	});
};
