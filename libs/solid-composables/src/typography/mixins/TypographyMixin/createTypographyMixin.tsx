import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './TypographyMixin.module.scss';
import { $TYPOGRAPHY_MIXIN } from './constants';
import type { TypographyMixinAPI, TypographyMixinProps } from './types';

export const createTypographyMixin = (props: TypographyMixinProps): TypographyMixinAPI => {
	const [locals, expose] = createExposable($TYPOGRAPHY_MIXIN, props);

	const classList = createClassList(styles, () => ({
		Typography: true,
		nowrap: Boolean(locals.nowrap),
	}));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
};
