import type { SurfaceContextVariant } from '../contexts';

type SurfaceVariantOptions = Partial<Omit<SurfaceContextVariant, 'type'>> & { name: string };

export const createSurfaceVariant = (params: SurfaceVariantOptions): SurfaceContextVariant => {
    const { extend = [], ...rest } = params;
    return { type: 'surface', extend, ...rest };
};
