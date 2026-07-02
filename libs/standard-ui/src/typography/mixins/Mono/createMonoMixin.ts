import { createSizedTypographyMixin, createTypographyMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './MonoMixin.module.scss';
import { $MONO_MIXIN } from './constants';
import type { MonoMixinAPI, MonoMixinProps } from './types';

const defaultProps: PickRequired<MonoMixinProps, 'size'> = {
	size: 'normal',
};

export const createMonoMixin = (props: MonoMixinProps): MonoMixinAPI => {
	const [locals, expose, compose] = createExposable($MONO_MIXIN, props);

	const size = () => locals.size ?? defaultProps.size;

	const classList = createClassList(styles, () => ['Mono', `size-${size()}`]);

	const { $root: $typographyMixinRoot } = compose(createTypographyMixin(locals));

	const { $root: $sizedTypographyRoot } = compose(createSizedTypographyMixin(locals, classList));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($typographyMixinRoot, $sizedTypographyRoot, $root),
	});
};
