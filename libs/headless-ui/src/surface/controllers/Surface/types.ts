import type { SurfaceContext, SurfaceContextValue } from '@noodlestan/context-ui';
import type {
    AriaGenericRegionAPI,
    AriaRegionProps,
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
    $root: AriaGenericRegionAPI['$root'] &
        SurfaceDataProps & {
            component: SurfaceTagName;
            onPointerDown?: JSX.EventHandler<HTMLElement, MouseEvent>;
            style: Styles;
        };
    $label: AriaGenericRegionAPI['$label'];
    $description: AriaGenericRegionAPI['$description'];
    context: SurfaceContext;
    contextValue: SurfaceContextValue;
};
