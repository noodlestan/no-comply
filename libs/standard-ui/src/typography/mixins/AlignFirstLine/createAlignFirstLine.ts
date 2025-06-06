import { createAlignFirstLineMixin as createHeadlessAlignFirstLineMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './AlignFirstLineMixin.module.scss';
import { $FIRST_LINE_ALIGN_MIXIN } from './constants';
import type { AlignFirstLineMixinAPI, AlignFirstLineMixinProps } from './types';

export const createAlignFirstLineMixin = (
	props: AlignFirstLineMixinProps,
): AlignFirstLineMixinAPI => {
	const [locals, expose, compose] = createExposable($FIRST_LINE_ALIGN_MIXIN, props);

	const { $root: $headlessAlignFirstLinenRoot } = compose(createHeadlessAlignFirstLineMixin());

	const classList = createClassList(styles, () => [`size-${locals.height}`]);
	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($headlessAlignFirstLinenRoot, $root),
	});
};
