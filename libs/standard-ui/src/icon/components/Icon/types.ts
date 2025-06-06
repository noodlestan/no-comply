import type {
	IconAPI as HeadlessIconAPI,
	IconProps as HeadlessIconProps,
	IconMixinAPI,
	IconMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';

export type IconProps = HeadlessIconProps &
	IconMixinProps & {
		size?: ContentSize;
	};

export type IconAPI = {
	$root: HeadlessIconAPI['$root'] &
		IconMixinAPI['$root'] & {
			classList: ClassList;
		};
};
