import { createAlignedToFirstLineMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './SizedContentMixin.module.scss';
import { $SIZED_CONTENT_MIXIN } from './constants';
import type { SizedContentMixinAPI, SizedContentMixinProps } from './types';

const defaultProps: PickRequired<SizedContentMixinProps, 'size' | 'scale'> = {
	size: 'normal',
	scale: 'normal',
};

export const createSizedContentMixin = (props: SizedContentMixinProps): SizedContentMixinAPI => {
	const [locals, expose, compose] = createExposable($SIZED_CONTENT_MIXIN, props);

	const size = () => locals.size ?? defaultProps.size;
	const scale = () => locals.scale ?? defaultProps.scale;

	const classList = createClassList(styles, () => [
		'SizedContent',
		`size-${size()}`,
		`scale-${scale()}`,
	]);

	const { $root: $alignedRoot } = compose(createAlignedToFirstLineMixin(locals, classList));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($alignedRoot, $root),
		size,
		scale,
	});
};
