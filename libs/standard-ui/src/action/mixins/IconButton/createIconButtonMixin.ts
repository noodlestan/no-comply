import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList, staticClassList } from '@no-comply/solid-primitives';

import styles from './IconButtonMixin.module.scss';
import { $ICON_BUTTON_MIXIN, ICON_BUTTOM_MAP_SIZE_TO_ICON_SIZE } from './constants';
import type { IconButtonMixinAPI, IconButtonMixinProps } from './types';

export const createIconButtonMixin = (props: IconButtonMixinProps): IconButtonMixinAPI => {
	const [locals, expose] = createExposable($ICON_BUTTON_MIXIN, props);

	const iconStaticProps = {
		classList: staticClassList(styles, '-Icon'),
	};
	const icon = computedProps(iconStaticProps, {
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
		icon,
	});
};
