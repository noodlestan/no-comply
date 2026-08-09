import type { FocusableAPI, IconMappedAPI, ToggleActionIcons } from '@no-comply/solid-composables';
import type { FocusContextValue } from '@no-comply/solid-contexts';
import type { AttributeBoolean } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../size';
import type { SegmentedButtonItemMixinAPI } from '../../mixins';

export type SegmentedButtonItemProps = {
	value: string;
	icons?: ToggleActionIcons;
	disabled?: boolean;
};

export type SegmentedButtonItemAPI = SegmentedButtonItemMixinAPI & {
	$root: SegmentedButtonItemMixinAPI['$root'] & FocusableAPI['$root'];
	$label: SegmentedButtonItemMixinAPI['$label'];
	$radio: FocusableAPI['$target'] & {
		type: string;
		name: string;
		checked: AttributeBoolean;
		onInput: (ev: Event) => void;
	};
	_icon: IconMappedAPI['_icon'] & {
		size: ContentSize;
	};
	contextValue: FocusContextValue;
	isFocused: Accessor<boolean>;
};
