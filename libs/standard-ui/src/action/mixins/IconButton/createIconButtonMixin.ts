import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList, staticClassList } from '@no-comply/solid-primitives';

import styles from './IconButtonMixin.module.scss';
import { $ICON_BUTTON_MIXIN, ICON_BUTTOM_MAP_SIZE_TO_ICON_SIZE } from './constants';
import type { IconButtonMixinAPI, IconButtonMixinProps } from './types';

/**
 * Applies styles for all icon buttons, handling the `size` and `rounded` props, and exposing the `size` prop for the composed {@link component:Icon}
 */
export const createIconButtonMixin = (props: IconButtonMixinProps): IconButtonMixinAPI => {
	const [locals, expose] = createExposable($ICON_BUTTON_MIXIN, props);

	const iconStaticProps = {
		classList: staticClassList(styles, '-Icon'),
	};
	const _icon = computedProps(iconStaticProps, {
		size: () => ICON_BUTTOM_MAP_SIZE_TO_ICON_SIZE[locals.size],
	});

	const classList = createClassList(styles, () => ({
		IconButton: true,
		[`is-round`]: Boolean(locals.round),
		[`is-small`]: Boolean(locals.size === 'small'),
	}));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
		_icon,
	});
};
