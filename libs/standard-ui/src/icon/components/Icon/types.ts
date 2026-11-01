import type {
	IconAPI as HeadlessIconAPI,
	IconProps as HeadlessIconProps,
	IconMixinAPI,
} from '@no-comply/solid-composables';

import type { SizedContentMixinAPI, SizedContentMixinProps } from '../../../content';

export type IconProps = HeadlessIconProps & Omit<SizedContentMixinProps, 'scale'>;

export type IconAPI = {
	$root: HeadlessIconAPI['$root'] & IconMixinAPI['$root'] & SizedContentMixinAPI['$root'];
};
