import { createStyleTransition } from '../helpers';
import { TransitionAPI } from '../types';

export const createVerticalGrowEnterTransition = (
    ms: number | string = 300,
    easing: string = 'linear',
): (() => TransitionAPI) => {
    return () => {
        return createStyleTransition(
            () => ({ height: '0', opacity: '0' }),
            (el: HTMLElement) => ({ height: `${el.scrollHeight}px`, opacity: '1' }),
            ['height', 'opacity'],
            ms,
            easing,
        );
    };
};
