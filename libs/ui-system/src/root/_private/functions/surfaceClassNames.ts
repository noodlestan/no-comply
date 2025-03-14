import { NUI_SURFACE_PREFIX } from '../../constants';
import { useSurfacesContext } from '../../providers';
import { surfacesStore } from '../../stores';
import { SystemSurface } from '../../types';

import { makeNuiClassName } from './makeNuiClassName';

const surfaceNames = (surface: SystemSurface): string[] => {
    const { surfaceByName } = surfacesStore;

    return [surface.name, ...surface.extend.flatMap(s => surfaceNames(surfaceByName(s)))];
};

export const surfaceClassNames = (): string[] => {
    const { surface } = useSurfacesContext();

    const classNames = surfaceNames(surface()).map(s => makeNuiClassName(NUI_SURFACE_PREFIX, s));

    return [makeNuiClassName(NUI_SURFACE_PREFIX), ...classNames];
};
