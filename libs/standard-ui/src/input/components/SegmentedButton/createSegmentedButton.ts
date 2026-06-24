import { OPTION_GROUP_INPUT_PROPS, createOptionGroupInput } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, pickProps } from '@no-comply/solid-primitives';

import { createSegmentedButtonContext } from '../../contexts';
import { createSegmentedButtonMixin } from '../../mixins';

import { $SEGMENTED_BUTTON } from './constants';
import type { SegmentedButtonAPI, SegmentedButtonProps } from './types';

export const createSegmentedButton = (props: SegmentedButtonProps): SegmentedButtonAPI => {
	const [locals, expose, compose] = createExposable($SEGMENTED_BUTTON, props);

	const optionGroupProps = pickProps(locals, OPTION_GROUP_INPUT_PROPS);
	const {
		$root: $optionGroupRoot,
		$label,
		$description,
		hasLabel,
		contextValue: optionGroupContextValue,
	} = compose(createOptionGroupInput(optionGroupProps));

	const { $root: $segmentedButtonMixinRoot, size } = compose(createSegmentedButtonMixin(locals));

	const segmentedButtonContextOptions = computedProps({ optionGroupContextValue }, { size });
	const contextValue = compose(createSegmentedButtonContext(segmentedButtonContextOptions));
	const [context] = contextValue;

	return exposeAPI(expose, '$root', {
		$root: combineProps($optionGroupRoot, $segmentedButtonMixinRoot),
		$label,
		$description,
		hasLabel,
		size,
		context,
		contextValue,
	});
};
