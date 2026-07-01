import { createFocusableMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	combineProps,
	computedProps,
	createClassList,
	staticClassList,
} from '@no-comply/solid-primitives';

import {
	createActionMixin,
	createSizedActionMixin,
	createToggleActionMixin,
} from '../../../action';
import { createActionLabelMixin } from '../../../typography';

import styles from './SegmentedButtonItemMixin.module.scss';
import { $SEGMENTED_BUTTON_ITEM_MIXIN } from './constants';
import type { SegmentedButtonItemMixinAPI, SegmentedButtonItemMixinProps } from './types';

export const createSegmentedButtonItemMixin = (
	props: SegmentedButtonItemMixinProps,
): SegmentedButtonItemMixinAPI => {
	const [locals, expose, compose] = createExposable($SEGMENTED_BUTTON_ITEM_MIXIN, props);

	const disabled = () => props.disabled;

	const actionMixinProps = computedProps({ variant: 'primary' } as const, { disabled });
	const { $root: $focusableMixinRoot } = compose(createFocusableMixin());
	const { $root: $actionMixinRoot } = compose(createActionMixin(actionMixinProps));
	const { $root: $sizedActionMixinRoot, size } = compose(createSizedActionMixin(locals));

	const toggleActionMixinProps = computedProps({ variant: 'primary' } as const, {
		value: () => props.active,
	});
	const { $root: $toggleActionMixinRoot } = compose(
		createToggleActionMixin(toggleActionMixinProps),
	);

	const actionLabelMixinProps = computedProps({ variant: size });
	const { $root: $actionLabelMixinRoot } = createActionLabelMixin(actionLabelMixinProps);

	const classList = createClassList(styles, ['SegmentedButtonItem', `size-${size()}`]);

	const $root = computedProps({
		classList,
	});

	const $label = {
		classList: staticClassList(styles, '-Button'),
	};

	return exposeAPI(expose, '$root', {
		$root: combineProps($focusableMixinRoot, $root),
		$label: combineProps(
			$actionMixinRoot,
			$sizedActionMixinRoot,
			$toggleActionMixinRoot,
			$actionLabelMixinRoot,
			$label,
		),
		size,
	});
};
