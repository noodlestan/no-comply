import {
	type ToggleActionIcons,
	createFocusable,
	createIconMapped,
} from '@no-comply/solid-composables';
import { createExposable, createIconValue, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';
import CircleDot from 'lucide-solid/icons/circle-dot';
import Dot from 'lucide-solid/icons/dot';

import { createSegmentedButtonItemMixin } from '../../mixins';
import { useSegmentedButton } from '../../providers';

import { $SEGMENTED_BUTTON_ITEM } from './constants';
import type { SegmentedButtonItemAPI, SegmentedButtonItemProps } from './types';

const ICONS: ToggleActionIcons = {
	on: createIconValue(CircleDot),
	off: createIconValue(Dot),
};

export const createSegmentedButtonItem = (
	props: SegmentedButtonItemProps,
): SegmentedButtonItemAPI => {
	const [locals, expose, compose] = createExposable($SEGMENTED_BUTTON_ITEM, props);

	const { optionGroupContext, size } = useSegmentedButton();
	const { name, isDisabled, isActive, onValueChange } = optionGroupContext();

	const segmentedButtonItemMixinProps = computedProps({
		size,
		active: () => isActive(locals.value),
	});
	const { $root: $mixinRoot, $label: $mixinLabel } = compose(
		createSegmentedButtonItemMixin(segmentedButtonItemMixinProps),
	);

	const { $root: $focusableRoot, $target, contextValue, isFocused } = compose(createFocusable());

	const $label = {
		onClick: () => onValueChange(locals.value),
	};

	const $radioStatic = {
		type: 'radio' as const,
		onInput: () => onValueChange(locals.value),
	};
	const $radio = computedProps($radioStatic, {
		name,
		checked: () => isActive(locals.value),
		disabled: isDisabled,
	});

	const map = computedProps({
		false: () => locals.icons?.off ?? ICONS.off,
		true: () => locals.icons?.on ?? ICONS.on,
	});

	const iconMappedProps = computedProps(
		{ map },
		{
			key: () => String(isActive(locals.value)),
		},
	);
	const { _icon: _iconMapped } = compose(createIconMapped(iconMappedProps));

	const _sizedIcon = computedProps({ size });
	const _icon = combineProps(_iconMapped, _sizedIcon);

	return exposeAPI(expose, '$root', {
		$root: combineProps($mixinRoot, $focusableRoot),
		$label: combineProps($mixinLabel, $label),
		$radio: combineProps($target, $radio),
		_icon,
		size,
		contextValue,
		isFocused,
	});
};
