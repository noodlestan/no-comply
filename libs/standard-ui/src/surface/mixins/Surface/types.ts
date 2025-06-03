import { type SurfaceMixinAPI as HeadlessSurfaceMixinAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { LayoutMixinAPI, LayoutMixinProps } from '../../../layout';

export type SurfaceMixinProps = LayoutMixinProps;

export type SurfaceMixinAPI = Omit<HeadlessSurfaceMixinAPI, '$root'> &
    Omit<LayoutMixinAPI, '$root'> & {
        $root: HeadlessSurfaceMixinAPI['$root'] &
            LayoutMixinAPI['$root'] & {
                classList: ClassList;
            };
    };
