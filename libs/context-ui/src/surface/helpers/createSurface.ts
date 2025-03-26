import type { SurfaceContextValue } from '../types';

type SurfaceOptions = Partial<Omit<SurfaceContextValue, 'type'>> & { name: string };

export const createSurface = (params: SurfaceOptions): SurfaceContextValue => {
    const { extend = [], ...rest } = params;
    return { type: 'surface', extend, ...rest };
};
