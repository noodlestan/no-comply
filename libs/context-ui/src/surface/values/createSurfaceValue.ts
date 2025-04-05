import type { SurfaceContextValue } from '../types';

type SurfaceValueOptions = Partial<Omit<SurfaceContextValue, 'type'>> & { name: string };

export const createSurfaceValue = (params: SurfaceValueOptions): SurfaceContextValue => {
    const { extend = [], ...rest } = params;
    return { type: 'surface', extend, ...rest };
};
