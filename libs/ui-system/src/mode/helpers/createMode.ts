import type { ModeContextValue } from '../types';

type ModeOptions = Partial<Omit<ModeContextValue, 'type'>> & { name: string };

export const createMode = (params: ModeOptions): ModeContextValue => {
    const { extend = [], ...rest } = params;
    return { type: 'mode', extend, ...rest };
};
