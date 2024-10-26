import { TransitionAPI } from '../types';

type TimedTransitionState = {
    started: boolean;
    timeout?: number;
    doneFn?: () => void;
};

export const createTimedTransition = (
    setup: (el: HTMLElement) => void,
    trigger: (el: HTMLElement) => void,
    ms: number = 300,
): TransitionAPI => {
    const state: TimedTransitionState = {
        started: true,
    };

    const finish = () => {
        clearTimeout(state.timeout);
        if (state.started && state.doneFn) {
            state.doneFn();
        }
        state.started = true;
        state.doneFn = undefined;
        state.timeout = undefined;
    };

    const transition = (el: HTMLElement, done?: () => void) => {
        if (state.started) {
            finish();
        }
        state.started = true;
        state.doneFn = done;

        setup(el);

        queueMicrotask(() => {
            trigger(el);
            clearTimeout(state.timeout);
            state.timeout = window.setTimeout(finish, ms);
        });
    };

    const api: TransitionAPI = {
        transition,
        finish,
    };

    return api;
};
