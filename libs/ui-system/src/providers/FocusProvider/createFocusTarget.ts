import { FocusTarget } from './types';

export const createFocusTarget = (name: string): FocusTarget => {
    return { targetName: name };
};
