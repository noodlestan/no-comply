import type { SurfaceContext, SurfaceContextValue } from '@noodlestan/context-ui';
import type {
    AriaLabelledAPI,
    AriaRegionElementProps,
    AriaRegionProps,
    SurfaceTagName,
} from '@noodlestan/context-ui-aria';
import type { RawDataAttributes } from '@noodlestan/context-ui-primitives';
import type { JSX } from 'solid-js';

export type SurfaceDataProps = RawDataAttributes<'data-surface'>;

export type SurfaceProps = AriaRegionProps & {
    variant: string;
    component?: SurfaceTagName;
    interactive?: boolean;
    disabled?: boolean;
    debug?: boolean;
    onMouseDown?: JSX.EventHandler<HTMLElement, MouseEvent>;
};

export type SurfaceAPI = {
    elProps: AriaRegionElementProps &
        SurfaceDataProps & {
            component: SurfaceTagName;
            onMouseDown?: JSX.EventHandler<HTMLElement, MouseEvent>;
        };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
    context: SurfaceContext;
    contextValue: SurfaceContextValue;
};
