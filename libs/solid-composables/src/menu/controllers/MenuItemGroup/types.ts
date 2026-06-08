import type { AriaGroupAPI } from '@no-comply/solid-accessibility';
import type { Accessor } from 'solid-js';

import type {
	MenuItemGroupContext,
	MenuItemGroupContextOptions,
	MenuItemGroupContextValue,
} from '../../private';

export type MenuItemGroupProps = MenuItemGroupContextOptions & {
	label?: string;
	description?: string;
};

export type MenuItemGroupAPI = {
	$root: AriaGroupAPI['$root'] & {
		'data-menu-item-group': '';
	};
	$label: AriaGroupAPI['$label'] & {
		children: string | undefined;
	};
	$description: AriaGroupAPI['$description'] & {
		children: string | undefined;
	};
	hasLabel: Accessor<boolean>;
	context: MenuItemGroupContext;
	contextValue: MenuItemGroupContextValue;
};
