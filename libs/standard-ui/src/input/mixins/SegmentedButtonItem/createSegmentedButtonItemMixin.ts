import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createActionMixin, createSizedActionMixin } from '../../../action';

import styles from './SegmentedButtonItemMixin.module.scss';
import { $SEGMENTED_BUTTON_ITEM_MIXIN } from './constants';
import type { SegmentedButtonItemMixinAPI, SegmentedButtonItemMixinProps } from './types';

export const createSegmentedButtonItemMixin = (
	props: SegmentedButtonItemMixinProps,
): SegmentedButtonItemMixinAPI => {
	const [locals, expose, compose] = createExposable($SEGMENTED_BUTTON_ITEM_MIXIN, props);

	const actionMixinProps = {
		variant: 'primary',
		intent: 'negative',
	} as const;
	const { $root: $actionMixinRoot } = compose(createActionMixin(actionMixinProps));
	const { $root: $sizedActionMixinRoot, size } = compose(createSizedActionMixin(locals));

	const $root = {
		classList: staticClassList(styles, 'SegmentedButtonItem'),
	};

	const $label = {
		classList: staticClassList(styles, '-Button'),
	};

	const $radio = {
		classList: staticClassList(styles, '-RadioInput'),
	};

	return exposeAPI(expose, '$root', {
		$root,
		$label: combineProps($actionMixinRoot, $sizedActionMixinRoot, $label),
		$radio,
		size,
	});
};
