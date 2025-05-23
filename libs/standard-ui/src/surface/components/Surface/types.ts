import type { LayoutMixinAPI, SurfaceBaseProps } from '@noodlestan/headless-ui';

import type { LayoutMixinProps } from '../../../layout';

export type SurfaceProps = SurfaceBaseProps &
    LayoutMixinProps & {
        variant?: SurfaceVariant;
    };

export type SurfaceVariant =
    | 'stage'
    | 'page'
    | 'card'
    | 'panel'
    | 'inverse'
    | 'message'
    | 'toast'
    | 'dialog'
    | 'menu';

export type SurfaceAPI = {
    surfaceProps: SurfaceBaseProps & LayoutMixinAPI['$root'];
};
