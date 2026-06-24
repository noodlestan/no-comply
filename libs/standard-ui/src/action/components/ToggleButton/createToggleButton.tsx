import { createAriaSwitch } from '@no-comply/solid-accessibility';
import {
	type ToggleActionIcons,
	type ToggleActionLabels,
	createToggleAction,
} from '@no-comply/solid-composables';
import { createExposable, createIconValue, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, pickProps } from '@no-comply/solid-primitives';
import ChevronDownIcon from 'lucide-solid/icons/chevron-down';
import ChevronUpIcon from 'lucide-solid/icons/chevron-up';

import type { ActionVariant } from '../../types';

import { $TOGGLE_BUTTON } from './constants';
import type { ToggleButtonAPI, ToggleButtonProps } from './types';

const LABELS: ToggleActionLabels = {
	on: 'On',
	off: 'Off',
};

const ICONS: ToggleActionIcons = {
	on: createIconValue(ChevronDownIcon),
	off: createIconValue(ChevronUpIcon),
};

export const createToggleButton = (props: ToggleButtonProps): ToggleButtonAPI => {
	const [locals, expose, compose] = createExposable($TOGGLE_BUTTON, props);

	const toggleActionProps = computedProps({
		value: () => locals.value,
		labels: () => Object.assign({}, LABELS, locals.labels),
		icons: () => Object.assign({}, ICONS, locals.icons),
	});
	const { _icon } = compose(createToggleAction(toggleActionProps));

	const ariaSwitchStaticProps = { tag: 'button' as const };
	const ariaSwitchProps = computedProps(ariaSwitchStaticProps, {
		label: () => _icon.label,
		checked: () => locals.value,
		disabled: () => Boolean(locals.disabled),
	});
	const { $root: $switchRoot } = createAriaSwitch(ariaSwitchProps);

	const _iconButton = {
		variant: 'plain' as ActionVariant,
	};
	const _iconButtonAllowedProps = pickProps(locals, ['size', 'onPress', 'disabled']);

	return exposeAPI(expose, '_iconButton', {
		_button: combineProps($switchRoot, _iconButton, _iconButtonAllowedProps),
		_icon,
		_iconButton: combineProps($switchRoot, _iconButton, _icon, _iconButtonAllowedProps),
	});
};
