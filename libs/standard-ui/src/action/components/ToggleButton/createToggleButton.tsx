import { createAriaSwitch } from '@no-comply/solid-accessibility';
import {
	type ToggleActionIcons,
	type ToggleActionLabelsProp,
	createToggleAction,
	resolveToggleActionLabelsProp,
} from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	combineProps,
	computedProps,
	createIconValue,
	pickProps,
} from '@no-comply/solid-primitives';
import CircleDot from 'lucide-solid/icons/circle-dot';
import Dot from 'lucide-solid/icons/dot';

import { TOGGLE_ACTION_MIXIN_PROPS, createToggleActionMixin } from '../../mixins';
import type { ActionVariant } from '../../types';

import { $TOGGLE_BUTTON } from './constants';
import type { ToggleButtonAPI, ToggleButtonProps } from './types';

const LABELS: ToggleActionLabelsProp = {
	on: 'On',
	off: 'Off',
};

const ICONS: ToggleActionIcons = {
	on: createIconValue(CircleDot),
	off: createIconValue(Dot),
};

export const createToggleButton = (props: ToggleButtonProps): ToggleButtonAPI => {
	const [locals, expose, compose] = createExposable($TOGGLE_BUTTON, props);

	const toggleActionProps = computedProps({
		value: () => locals.value,
		labels: () => resolveToggleActionLabelsProp(LABELS, locals.labels),
		icons: () => Object.assign({}, ICONS, locals.icons),
	});
	const { _icon: toggleActionIcon } = compose(createToggleAction(toggleActionProps));
	const _sizedIcon = computedProps({ size: () => locals.size });
	const _icon = combineProps(toggleActionIcon, _sizedIcon);

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
	const _iconButtonAllowedProps = pickProps(locals, ['size', 'onPress', 'disabled', 'variant']);

	const toggleActionMixinProps = pickProps(locals, TOGGLE_ACTION_MIXIN_PROPS);
	const { $root: $toggleButtonMixinRoot } = compose(
		createToggleActionMixin(toggleActionMixinProps),
	);

	return exposeAPI(expose, '_iconButton', {
		_button: combineProps(
			$switchRoot,
			_iconButton,
			_iconButtonAllowedProps,
			$toggleButtonMixinRoot,
		),
		_icon,
		_iconButton: combineProps($switchRoot, _iconButton, _icon, _iconButtonAllowedProps),
	});
};
