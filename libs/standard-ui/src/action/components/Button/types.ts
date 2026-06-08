import type { FocusRingAPI, PressableAPI, PressableProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ButtonMixinAPI, ButtonMixinProps } from '../../mixins';

export type ButtonProps = PressableProps & ButtonMixinProps;

export type ButtonAPI = Omit<ButtonMixinAPI, '$root'> & {
	$root: PressableAPI['$root'] &
		FocusRingAPI['$root'] &
		ButtonMixinAPI['$root'] & {
			classList: ClassList;
		};
};
