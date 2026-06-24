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

	const segmentedButtonItemMixinProps = computedProps({ size });
	const {
		$root: $mixinRoot,
		$label: $mixinLabel,
		$radio: $mixinRadio,
	} = compose(createSegmentedButtonItemMixin(segmentedButtonItemMixinProps));

	const $root = {
		// onClick: () => onValueChange(locals.value),
	};

	const $label = {
		onClick: () => onValueChange(locals.value),
	};

	const $radio = computedProps(
		{
			type: 'radio',
			onInput: () => onValueChange(locals.value),
		},
		{
			name,
			isDisabled,
			checked: () => isActive(locals.value),
		},
	);

	return exposeAPI(expose, '$root', {
		$root: combineProps($mixinRoot, $root),
		$label: combineProps($mixinLabel, $label),
		$radio: combineProps($mixinRadio, $radio),
		size,
	});
};
