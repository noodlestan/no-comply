import type {
	IconAPI as HeadlessIconAPI,
	IconProps as HeadlessIconProps,
	IconMixinAPI,
	IconMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../size';

export type IconProps = HeadlessIconProps &
	IconMixinProps & {
		/**
		 * Sets the icon size
		 *
		 * @default normal
		 */
		size?: ContentSize;
	};

export type IconAPI = {
	$root: HeadlessIconAPI['$root'] &
		IconMixinAPI['$root'] & {
			classList: ClassList;
		};
};
