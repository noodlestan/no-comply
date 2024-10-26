import { createStyleTransition } from '../helpers';
import { TransitionAPI } from '../types';

export const createFadeEnterTransition = (
    ms: number | string = 300,
    easing: string = 'linear',
): (() => TransitionAPI) => {
    return () => {
        return createStyleTransition(
            () => ({ opacity: '0' }),
            () => ({ opacity: '1' }),
            'opacity',
            ms,
            easing,
        );
    };
};
