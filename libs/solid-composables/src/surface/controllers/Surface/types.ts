import type {
    AriaGenericRegionAPI,
    AriaRegionProps,
    SurfaceTagName,
} from '@no-comply/solid-accessibility';
import type { SurfaceContext, SurfaceContextValue } from '@no-comply/solid-contexts';
import type { RawDataAttributes, Styles } from '@no-comply/solid-primitives';

export type SurfaceDataProps = RawDataAttributes<'data-surface'>;

export type SurfaceProps = AriaRegionProps & {
    tag?: SurfaceTagName;
    variant: string;
    interactive?: boolean;
    disabled?: boolean;
    debug?: boolean;
};

export type SurfaceAPI = {
    $root: AriaGenericRegionAPI['$root'] &
        SurfaceDataProps & {
            component: SurfaceTagName;
            style: Styles;
        };
    $label: AriaGenericRegionAPI['$label'];
    $description: AriaGenericRegionAPI['$description'];
    context: SurfaceContext;
    contextValue: SurfaceContextValue;
};
