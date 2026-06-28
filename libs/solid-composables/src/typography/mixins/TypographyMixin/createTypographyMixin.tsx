import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';

import { createAlignedToFirstLineMixin } from '../AlignedToFirstLine';

import styles from './TypographyMixin.module.scss';
import { $TYPOGRAPHY_MIXIN } from './constants';
import type { TypographyMixinAPI, TypographyMixinProps } from './types';

export const createTypographyMixin = (props: TypographyMixinProps): TypographyMixinAPI => {
	const [locals, expose, compose] = createExposable($TYPOGRAPHY_MIXIN, props);

	const { $root: $alignedToFirstLine } = compose(createAlignedToFirstLineMixin(locals));

	const classList = createClassList(styles, () => ({
		Typography: true,
		nowrap: Boolean(locals.nowrap),
	}));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($alignedToFirstLine, $root),
	});
};
