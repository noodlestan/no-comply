import { createSignal, onCleanup } from 'solid-js';

import type { ContainerQueryAPI, ContainerQueryProps } from './types';

export const createContainerQuery = (props: ContainerQueryProps): ContainerQueryAPI => {
    const [isMatch, setIsMatch] = createSignal(false);
    let element: HTMLElement | null = null;
    let observer: ResizeObserver | null = null;

    const parseQuery = (query: string) => {
        const match = query.match(/min-width:\s*(\d+)px/);
        if (match && match[1]) {
            return { type: 'min-width', value: parseInt(match[1], 10) };
        }
        throw new Error(`Unsupported query format: ${query}`);
    };

    const { type, value } = parseQuery(props.query);

    const checkMatch = () => {
        if (!element) {
            return;
        }
        if (type === 'min-width') {
            setIsMatch(element.offsetWidth >= value);
        }
    };

    const setElement = (el: HTMLElement) => {
        element = el;
        observer = new ResizeObserver(checkMatch);
        observer.observe(el);
        checkMatch();
    };

    onCleanup(() => {
        observer?.disconnect();
        observer = null;
    });

    const $root = {
        ref: setElement,
    };

    return { $root, isMatch };
};
