import type { SurfaceContext, SurfaceContextValue } from '@noodlestan/context-ui';
import type {
    AriaLabelledAPI,
    AriaRegionAPI,
    AriaRegionProps,
    AriaRoleName,
    SurfaceTagName,
} from '@noodlestan/context-ui-aria';
import type { RawDataAttributes, Styles } from '@noodlestan/context-ui-primitives';
import type { JSX } from 'solid-js';

export type SurfaceDataProps = RawDataAttributes<'data-surface'>;

export type SurfaceProps = AriaRegionProps & {
    tag?: SurfaceTagName;
    variant: string;
    interactive?: boolean;
    disabled?: boolean;
    debug?: boolean;
    onPointerDown?: JSX.EventHandler<HTMLElement, MouseEvent>;
};

export type SurfaceAPI = {
    $root: AriaRegionAPI['$root'] &
        SurfaceDataProps & {
            component: SurfaceTagName;
            onPointerDown?: JSX.EventHandler<HTMLElement, MouseEvent>;
            style: Styles;
            role: AriaRoleName;
        };
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
    context: SurfaceContext;
    contextValue: SurfaceContextValue;
};
