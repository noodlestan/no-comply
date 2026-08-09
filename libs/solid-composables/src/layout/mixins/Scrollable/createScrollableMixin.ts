import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './ScrollableMixin.module.scss';
import { $SCROLLABLE_MIXIN } from './constants';
import type { ScrollableMixinAPI, ScrollableMixinProps } from './types';

const defaultProps: PickRequired<ScrollableMixinProps, 'tag'> = {
	tag: 'div',
};

export const createScrollableMixin = (props: ScrollableMixinProps): ScrollableMixinAPI => {
	const [locals, expose] = createExposable($SCROLLABLE_MIXIN, props);

	const component = () => locals.tag ?? defaultProps.tag;
	const classList = createClassList(styles, () => ({
		Scrollable: true,
		x: Boolean(locals.x),
		y: Boolean(locals.y),
	}));

	const $root = computedProps({
		classList,
		component,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
};
