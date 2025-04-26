import type { SurfaceAPI, SurfaceProps } from '../../controllers';
import type { SurfaceMixinAPI } from '../../mixins';

export type SurfaceBaseProps = SurfaceProps & {
    variant: string;
};

export type SurfaceBaseAPI = {
    $root: SurfaceAPI['$root'] & SurfaceMixinAPI['$root'];
    $label: SurfaceAPI['$label'];
    $description: SurfaceAPI['$description'];
    context: SurfaceAPI['context'];
    contextValue: SurfaceAPI['contextValue'];
};
