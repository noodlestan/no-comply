import type { FocusableAPI } from '@no-comply/solid-composables';
import type { FocusContextValue } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

import type { SegmentedButtonItemMixinAPI } from '../../mixins';

export type SegmentedButtonItemProps = {
	value: string;
};

export type SegmentedButtonItemAPI = SegmentedButtonItemMixinAPI & {
	$root: SegmentedButtonItemMixinAPI['$root'] & FocusableAPI['$root'];
	$label: SegmentedButtonItemMixinAPI['$label'] & {
		onClick: () => void;
	};
	$radio: FocusableAPI['$target'] & {
		type: string;
		name: string;
		checked: boolean;
		disabled: boolean;
		onInput: (ev: Event) => void;
	};
	contextValue: FocusContextValue;
	isFocused: Accessor<boolean>;
};
