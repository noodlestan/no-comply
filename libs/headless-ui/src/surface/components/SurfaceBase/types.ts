import type { JSX } from 'solid-js/jsx-runtime';

import type { TagProps } from '../../../tag';
import type { SurfaceAPI, SurfaceProps } from '../../controllers';
import type { SurfaceMixinProps } from '../../mixins';

export type SurfaceBaseProps = Omit<TagProps, 'component' | 'children'> &
    SurfaceProps &
    SurfaceMixinProps & {
        variant: string;
        children: JSX.Element | ((surface: SurfaceAPI) => JSX.Element);
    };
