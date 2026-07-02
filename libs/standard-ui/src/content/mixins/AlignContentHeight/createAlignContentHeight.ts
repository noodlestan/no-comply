import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './ContentHeightMixin.module.scss';
import { $ALIGN_CONTENT_HEIGHT_MIXIN } from './constants';
import type { AlignContentHeightMixinAPI, AlignContentHeightMixinProps } from './types';

export const createAlignContentHeightMixin = (
	props: AlignContentHeightMixinProps,
): AlignContentHeightMixinAPI => {
	const [locals, expose] = createExposable($ALIGN_CONTENT_HEIGHT_MIXIN, props);

	const classList = createClassList(styles, () => [
		'AlignContentHeight',
		`height-${locals.height}`,
	]);
	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
};
