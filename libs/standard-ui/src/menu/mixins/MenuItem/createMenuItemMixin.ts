import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	staticClassList,
} from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { createActionMixin } from '../../../action';
import type { ContentSize } from '../../../types';

import styles from './MenuItemMixin.module.scss';
import { $MENU_ITEM_MIXIN } from './constants';
import type { MenuItemMixinAPI, MenuItemMixinProps } from './types';

const defaultProps: PickRequired<MenuItemMixinProps, 'variant'> = {
	variant: 'plain',
};

export const createMenuItemMixin = (props: MenuItemMixinProps): MenuItemMixinAPI => {
	const [locals, expose, compose] = createExposable($MENU_ITEM_MIXIN, props);

	const [, others] = splitProps(locals, ['variant']);
	const variant = () => locals.variant ?? defaultProps.variant;
	const size = () => 'normal' as ContentSize;
	const actionProps = computedProps(others, { variant, size, inset: () => true });
	const { $root: $actionMixinRoot } = compose(createActionMixin(actionProps));

	const $root = {
		classList: staticClassList(styles, 'MenuItem'),
	};

	const $iconSlot = {
		classList: staticClassList(styles, '-Icon'),
	};

	const $labelSlot = {
		classList: staticClassList(styles, '-Label'),
	};

	const $subLabelSlot = {
		classList: staticClassList(styles, '-LabelSub'),
	};

	const $descriptionSlot = {
		classList: staticClassList(styles, '-Description'),
	};

	const $expandSlot = {
		classList: staticClassList(styles, '-Expand'),
	};

	return exposeAPI(expose, '$root', {
		$root: combineProps($actionMixinRoot, $root),
		$iconSlot,
		$expandSlot,
		$labelSlot,
		$subLabelSlot,
		$descriptionSlot,
	});
};
