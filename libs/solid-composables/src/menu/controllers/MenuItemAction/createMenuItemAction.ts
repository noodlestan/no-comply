import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PressEvent, combineProps, pickProps } from '@no-comply/solid-primitives';

import { createBaseMenuItem, useMenu } from '../../private';

import { $MENU_ITEM_ACTION, MENU_ITEM_ACTION_PROPS } from './constants';
import type { MenuItemActionAPI, MenuItemActionProps } from './types';

export const createMenuItemAction = (props: MenuItemActionProps): MenuItemActionAPI => {
	const [locals, expose] = createExposable($MENU_ITEM_ACTION, props);

	const menuContext = useMenu();

	const picked = pickProps(
		locals,
		MENU_ITEM_ACTION_PROPS.filter(i => i !== 'onPress'),
	);
	const menuItemBaseProps = combineProps(picked, {
		onPress: (ev: PressEvent) => {
			locals.onPress?.(ev);
			if (!ev.defaultPrevented) {
				menuContext.dismissStack();
				ev.preventDefault();
				ev.stopImmediatePropagation();
			}
		},
	});
	const { $root: $baseMenuItemRoot, ...rest } = createBaseMenuItem(menuItemBaseProps, 'action');

	return exposeAPI(expose, '$root', {
		...rest,
		$root: $baseMenuItemRoot,
	});
};
