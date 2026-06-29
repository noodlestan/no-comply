import {
	type ToggleActionIcons,
	createFocusable,
	createIconMapped,
	createPressable,
} from '@no-comply/solid-composables';
import { createExposable, createIconValue, exposeAPI } from '@no-comply/solid-contexts';
import {
	attributeBoolean,
	combineProps,
	computedProps,
	shortId,
} from '@no-comply/solid-primitives';
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

	const id = shortId();

	const { optionGroupContext, size } = useSegmentedButton();
	const { name, isDisabled, isActive, onValueChange } = optionGroupContext();

	const disabled = () => props.disabled || isDisabled();

	const pressableProps = computedProps({ disabled });
	const { $root: $pressableRoot } = compose(createPressable(pressableProps));

	const { $root: $focusableRoot, $target, contextValue, isFocused } = compose(createFocusable({}));

	const map = computedProps({
		false: () => locals.icons?.off ?? ICONS.off,
		true: () => locals.icons?.on ?? ICONS.on,
	});

	const iconMappedStaticProps = { map };
	const iconMappedProps = computedProps(iconMappedStaticProps, {
		key: () => String(isActive(locals.value)),
	});
	const { _icon: _iconMapped } = compose(createIconMapped(iconMappedProps));

	const segmentedButtonItemMixinProps = computedProps({
		size,
		disabled,
		active: () => isActive(locals.value),
	});
	const { $root: $mixinRoot, $label: $mixinLabel } = compose(
		createSegmentedButtonItemMixin(segmentedButtonItemMixinProps),
	);

	const $labelStatic = {
		for: id,
	};
	const $label = computedProps($labelStatic, {
		'data-inactive': () => attributeBoolean(disabled()),
	});

	const handleKeyDown = (ev: KeyboardEvent) => {
		if (disabled() && ev.key !== 'Tab') {
			ev.preventDefault();
		}
	};

	// LOL
	const $radioStatic = {
		id,
		type: 'radio' as const,
		onInput: () => onValueChange(locals.value),
		onkeydown: handleKeyDown,
	};
	const $radio = computedProps($radioStatic, {
		name,
		checked: () => attributeBoolean(isActive(locals.value)),
	});

	const _sizedIcon = computedProps({ size });
	const _icon = combineProps(_iconMapped, _sizedIcon);

	return exposeAPI(expose, '$root', {
		$root: combineProps($mixinRoot, $focusableRoot),
		$label: combineProps($mixinLabel, $label),
		$radio: combineProps($pressableRoot, $target, $radio),
		_icon,
		size,
		contextValue,
		isFocused,
	});
};
