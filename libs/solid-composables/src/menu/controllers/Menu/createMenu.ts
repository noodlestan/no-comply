import { createAriaMenu } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createMenuContext } from '../../private';

import { $MENU } from './constants';
import type { MenuAPI, MenuProps } from './types';

export const createMenu = (props: MenuProps): MenuAPI => {
	const [locals, expose, compose] = createExposable($MENU, props);

	const contextValue = compose(createMenuContext(locals));
	const [context] = contextValue;

	const { $root: $menuRoot, $label: $ariaLabel } = createAriaMenu(locals);

	const $labelStatic = {
		component: 'p' as const,
	};
	const $localLabel = computedProps($labelStatic, {
		children: () => locals.label,
	});

	const $root = {
		role: 'menu',
		'data-menu': '',
	} as const;

	return exposeAPI(expose, '$root', {
		$root: combineProps($menuRoot, $root),
		$label: combineProps($ariaLabel, $localLabel),
		context,
		contextValue,
	});
};
