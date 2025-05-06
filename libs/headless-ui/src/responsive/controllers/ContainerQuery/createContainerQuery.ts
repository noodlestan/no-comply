import { createEffect, createSignal, onCleanup } from 'solid-js';

import { matchContainerQuery } from './private';
import type { ContainerQueryAPI, ContainerQueryProps } from './types';

export const createContainerQuery = (props: ContainerQueryProps): ContainerQueryAPI => {
    const [isMatch, setIsMatch] = createSignal(false);
    let element: HTMLElement | null = null;
    let observer: ResizeObserver | null = null;

    const checkMatch = () => {
        if (!element) {
            return;
        }
        const queries = Array.isArray(props.query) ? props.query : [props.query];
        const matches = queries.some(query => matchContainerQuery(query, element as HTMLElement));
        setIsMatch(matches);
    };

    const setElement = (el: HTMLElement) => {
        element = el;
        observer = new ResizeObserver(checkMatch);
        observer.observe(el);
        checkMatch();
    };

    createEffect(() => {
        if (props.query) {
            checkMatch();
        }
    });

    onCleanup(() => {
        observer?.disconnect();
        observer = null;
    });

    const $root = {
        ref: setElement,
    };

    return { $root, isMatch };
};
