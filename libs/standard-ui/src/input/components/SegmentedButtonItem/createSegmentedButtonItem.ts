import { createFocusable } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createSegmentedButtonItemMixin } from '../../mixins';
import { useSegmentedButton } from '../../providers';

import { $SEGMENTED_BUTTON_ITEM } from './constants';
import type { SegmentedButtonItemAPI, SegmentedButtonItemProps } from './types';

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

	return exposeAPI(expose, '$root', {
		$root: combineProps($mixinRoot, $focusableRoot),
		$label: combineProps($mixinLabel, $label),
		$radio: combineProps($target, $radio),
		size,
		contextValue,
		isFocused,
	});
};
