import type { SurfaceContextValue } from '../types';

type SurfaceOptions = Partial<Omit<SurfaceContextValue, 'type'>> & { name: string };

export function createSurface(params: SurfaceOptions): SurfaceContextValue {
    const { extend = [], ...rest } = params;
    return { type: 'surface', extend, ...rest };
}
