import { surfaceVars } from '../private';

export const contextVars = (): Record<string, string | undefined> => {
    return {
        ...surfaceVars(),
    };
};
