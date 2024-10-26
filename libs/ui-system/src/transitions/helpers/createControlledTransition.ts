import { TransitionAPI } from '../types';

type ControlledTransitionState = {
    started: boolean;
    doneFn?: () => void;
};

export const createControlledTransition = (
    setup: (el: HTMLElement) => void,
    trigger: (el: HTMLElement) => void,
): TransitionAPI => {
    const state: ControlledTransitionState = {
        started: false,
    };

    const finish = () => {
        if (state.started && state.doneFn) {
            state.doneFn();
        }
        state.started = false;
        state.doneFn = undefined;
    };

    const transition = (el: HTMLElement, done?: () => void) => {
        finish();
        state.started = true;
        state.doneFn = done;

        setup(el);
        queueMicrotask(() => {
            trigger(el);
        });
    };

    const api: TransitionAPI = {
        transition,
        finish,
    };

    return api;
};
