import type {
	SurfaceAPI as HeadlessSurfaceAPI,
	SurfaceProps as HeadlessSurfaceProps,
} from '@no-comply/solid-composables';

import type { LayoutMixinAPI, LayoutMixinProps } from '../../../layout';
import type { SurfaceVariant } from '../../../theme';

export type SurfaceProps = LayoutMixinProps &
	Omit<HeadlessSurfaceProps, 'variant'> & {
		variant?: SurfaceVariant;
	};

export type SurfaceAPI = Omit<HeadlessSurfaceAPI, '$root'> & {
	$root: HeadlessSurfaceAPI['$root'] & LayoutMixinAPI['$root'];
};
