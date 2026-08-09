import { createAriaMenuItem } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type IconComponent, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createPressable } from '../../../../action';
import { useMenuItemGroupChild } from '../../../providers';
import type { MenuItemType } from '../../../types';

import { $BASE_MENU_ITEM } from './constants';
import type { BaseMenuItemAPI, BaseMenuItemProps } from './types';

export const createBaseMenuItem = (
	props: BaseMenuItemProps,
	type: MenuItemType,
): BaseMenuItemAPI => {
	const [locals, expose, compose] = createExposable($BASE_MENU_ITEM, props);
	// const setRovingFocus = (value: boolean) => console.log('set focus', value);
	// const menuContext = useMenuItem({ setRovingFocus });

	const ariaMenuItemProps = computedProps(
		{ labelled: true },
		{ described: () => Boolean(locals.description) },
	);
	const {
		$root: $ariaMenuItemRoot,
		$label: $ariaMenuItemLabel,
		$description: $ariaMenuItemDescription,
	} = createAriaMenuItem(ariaMenuItemProps);

	const { $root: $pressableRoot } = compose(createPressable(locals, 'menuitem'));

	const $localLabel = computedProps({
		children: () => locals.label,
	});

	const $localDescription = computedProps({
		children: () => locals.description,
	});

	const hasIcon = () => Boolean(locals.icon);
	const isSubMenu = () => type === 'sub-menu';

	const iconStaticProps = {
		alignFirstLine: 'measure',
		'aria-hidden': true,
	} as const;

	const _icon = computedProps(iconStaticProps, {
		icon: () => {
			if (!locals.icon) {
				console.error('Unavailable. Wrap in `hasIcon()`.');
			}
			return locals.icon as IconComponent;
		},
	});

	const $root = {
		'data-menu-item': type,
	};

	const menuItemAPI = {
		hasIcon,
		isSubMenu,
	};

	const context = useMenuItemGroupChild(menuItemAPI);

	return exposeAPI(expose, '$root', {
		$root: combineProps($pressableRoot, $ariaMenuItemRoot, $root),
		$label: combineProps($ariaMenuItemLabel, $localLabel),
		$description: combineProps($ariaMenuItemDescription, $localDescription),
		_icon,
		hasIcon,
		isSubMenu,
		groupHasIcons: () => hasIcon() || Boolean(context?.hasIcons()),
		groupHasSubMenus: () => isSubMenu() || Boolean(context?.hasSubMenus()),
	});
};
