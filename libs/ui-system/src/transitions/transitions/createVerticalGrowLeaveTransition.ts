import { createStyleTransition } from '../helpers';
import { TransitionAPI } from '../types';

export const createVerticalGrowLeaveTransition = (
    ms: number | string = 300,
    easing: string = 'linear',
): (() => TransitionAPI) => {
    return () => {
        return createStyleTransition(
            (el: HTMLElement) => ({ height: `${el.scrollHeight}px`, opacity: '1' }),
            () => ({ height: '0', opacity: '0' }),
            ['height', 'opacity'],
            ms,
            easing,
        );
    };
};
