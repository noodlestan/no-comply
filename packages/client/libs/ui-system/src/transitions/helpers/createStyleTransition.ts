import { createTransitionAttribute, extractTransitionFromStyle } from '../functions';
import { TransitionAPI } from '../types';

type ControlledTransitionState = {
    started: boolean;
    el?: HTMLElement;
    doneFn?: () => void;
};

export const createStyleTransition = (
    setup: (el: HTMLElement) => Partial<CSSStyleDeclaration>,
    trigger: (el: HTMLElement) => Partial<CSSStyleDeclaration>,
    attribute: string | string[],
    ms: number | string = 300,
    easing: string = 'linear',
): TransitionAPI => {
    const state: ControlledTransitionState = {
        started: false,
    };

    const finish = () => {
        if (state.el) {
            state.el.removeEventListener('transitionend', finish);
            state.el.style.transition = '';
        }
        if (state.started && state.doneFn) {
            state.doneFn();
        }
        state.started = false;
        state.doneFn = undefined;
        state.el = undefined;
    };

    const transition = (el: HTMLElement, done: () => void) => {
        if (state.started) {
            finish();
        }
        state.started = true;
        state.doneFn = done;
        state.el = el;

        const setupStyles = setup(el);
        const transition =
            extractTransitionFromStyle(setupStyles) ||
            createTransitionAttribute(attribute, ms, easing);
        Object.assign(el.style, setupStyles);
        el.style.transition = transition;

        queueMicrotask(() => {
            const triggerStyles = trigger(el);
            Object.assign(el.style, triggerStyles);
            el.addEventListener('transitionend', finish, { once: true });
        });
    };

    const api: TransitionAPI = {
        transition,
        finish,
    };

    return api;
};
