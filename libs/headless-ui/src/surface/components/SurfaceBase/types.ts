import type { SurfaceContext } from '@noodlestan/context-ui';
import type {
    AriaLabelElementProps,
    AriaRegionElementProps,
    AriaRegionProps,
    SurfaceTagName,
} from '@noodlestan/context-ui-aria';
import type { RawDataAttributes } from '@noodlestan/context-ui-types';
import type { Accessor, JSX } from 'solid-js';

import type { TagProps } from '../../../tag';

export type SurfaceBaseProps = Omit<TagProps, 'component'> &
    AriaRegionProps & {
        component?: SurfaceTagName;
        interactive?: boolean;
        disabled?: boolean;
        variant: string;
        debug?: boolean;
        onMouseDown?: JSX.EventHandler<HTMLElement, MouseEvent>;
    };

export type SurfaceDataProps = RawDataAttributes<'data-surface'>;

export type SurfaceBaseTagProps = Omit<SurfaceBaseProps, 'variant'> & {
    context: SurfaceContext;
};

export type SurfaceBaseElementProps = TagProps &
    AriaRegionElementProps & {
        onMouseDown?: JSX.EventHandler<HTMLElement, MouseEvent>;
    };

export type SurfaceAPI = {
    elProps: SurfaceBaseElementProps;
    elData: Accessor<SurfaceDataProps>;
    labelProps: AriaLabelElementProps;
};
