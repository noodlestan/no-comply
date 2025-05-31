import type { LayoutMixinAPI, SurfaceBaseProps } from '@no-comply/solid-composables';

import type { LayoutMixinProps } from '../../../layout';
import type { SurfaceVariant } from '../../../theme';

export type SurfaceProps = SurfaceBaseProps &
    LayoutMixinProps & {
        variant?: SurfaceVariant;
    };

export type SurfaceAPI = {
    surfaceProps: SurfaceBaseProps & LayoutMixinAPI['$root'];
};
