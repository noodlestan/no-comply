import { type ExpandActionIcons, createExpandAction } from '@no-comply/solid-composables';
import { createExposable, createIconValue, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';
import ChevronDownIcon from 'lucide-solid/icons/chevron-down';
import ChevronUpIcon from 'lucide-solid/icons/chevron-up';

import type { ActionVariant } from '../../types';

import { $EXPAND_BUTTON } from './constants';
import type { ExpandButtonAPI, ExpandButtonProps } from './types';

const ICONS: ExpandActionIcons = {
	expanded: createIconValue(ChevronDownIcon),
	collapsed: createIconValue(ChevronUpIcon),
};

export const createExpandButton = (props: ExpandButtonProps): ExpandButtonAPI => {
	const [locals, expose, compose] = createExposable($EXPAND_BUTTON, props);

	const expandButtonProps = computedProps({
		controls: () => locals.controls,
		expanded: () => locals.expanded,
		labels: () => locals.labels,
		icons: () => Object.assign({}, ICONS, locals.icons),
	});
	const { _icon: expandActionIcon } = compose(createExpandAction(expandButtonProps));

	const _iconButton = {
		variant: 'plain' as ActionVariant,
	};

	return exposeAPI(expose, '_iconButton', {
		_iconButton: combineProps(expandActionIcon, locals, _iconButton),
	});
};
