import { surfaceVars } from '../_private';

export const contextVars = (): Record<string, string | undefined> => {
    return {
        ...surfaceVars(),
    };
};
