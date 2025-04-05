import type { ModeContextValue } from '../types';

type ModeValueOptions = Partial<Omit<ModeContextValue, 'type'>> & { name: string };

export const createModeValue = (params: ModeValueOptions): ModeContextValue => {
    const { extend = [], ...rest } = params;
    return { type: 'mode', extend, ...rest };
};
