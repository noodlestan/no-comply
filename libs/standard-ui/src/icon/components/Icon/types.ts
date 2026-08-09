import type {
	IconAPI as HeadlessIconAPI,
	IconProps as HeadlessIconProps,
	IconMixinAPI,
} from '@no-comply/solid-composables';

import type { SizedIconMixinAPI, SizedIconMixinProps } from '../../mixins';

export type IconProps = HeadlessIconProps & SizedIconMixinProps;

export type IconAPI = {
	$root: HeadlessIconAPI['$root'] & IconMixinAPI['$root'] & SizedIconMixinAPI['$root'];
};
