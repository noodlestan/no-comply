import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './ContentPaletteMixin.module.scss';
import { $CONTENT_PALETTE_MIXIN } from './constants';
import type { ContentPaletteMixinAPI, ContentPaletteMixinProps } from './types';

const defaultProps: PickRequired<ContentPaletteMixinProps, 'palette'> = {
	palette: 'neutral',
};

export const createContentPaletteMixin = (
	props: ContentPaletteMixinProps,
): ContentPaletteMixinAPI => {
	const [locals, expose] = createExposable($CONTENT_PALETTE_MIXIN, props);

	const palette = () => locals.palette ?? defaultProps.palette;
	const classList = createClassList(styles, () => [`palette-${palette()}`]);

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
		palette,
	});
};
