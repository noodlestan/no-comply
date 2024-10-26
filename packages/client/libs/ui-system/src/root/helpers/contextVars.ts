import { surfaceVars } from '../_private/functions';

export const contextVars = (): Record<string, string | undefined> => {
    return {
        ...surfaceVars(),
    };
};
