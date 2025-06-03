import type {
    SurfaceAPI as HeadlessSurfaceAPI,
    SurfaceProps as HeadlessSurfaceProps,
} from '@no-comply/solid-composables';

import type { LayoutMixinAPI, LayoutMixinProps } from '../../../layout';
import type { SurfaceVariant } from '../../../theme';

export type SurfaceProps = Omit<HeadlessSurfaceProps, 'variant'> &
    LayoutMixinProps & {
        variant?: SurfaceVariant;
    };

export type SurfaceAPI = Omit<HeadlessSurfaceAPI, '$root'> & {
    $root: HeadlessSurfaceAPI['$root'] & LayoutMixinAPI['$root'];
};
