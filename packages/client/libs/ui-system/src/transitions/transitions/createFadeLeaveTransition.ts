import { createStyleTransition } from '../helpers';
import { TransitionAPI } from '../types';

export const createFadeLeaveTransition = (
    ms: number | string = 300,
    easing: string = 'linear',
): (() => TransitionAPI) => {
    return () => {
        return createStyleTransition(
            () => ({ opacity: '1' }),
            () => ({ opacity: '0' }),
            'opacity',
            ms,
            easing,
        );
    };
};
