import type { ModeContextVariant } from '../contexts';

type ModeVariantOptions = Partial<Omit<ModeContextVariant, 'type'>> & { name: string };

export const createModeVariant = (params: ModeVariantOptions): ModeContextVariant => {
    const { extend = [], ...rest } = params;
    return { type: 'mode', extend, ...rest };
};
