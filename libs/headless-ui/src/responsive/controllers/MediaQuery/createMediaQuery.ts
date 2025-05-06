import { createEffect, createSignal, onCleanup } from 'solid-js';

import { buildMediaQueryString } from './private';
import type { MediaQueryAPI, MediaQueryProps } from './types';

export const createMediaQuery = (props: MediaQueryProps): MediaQueryAPI => {
    const [isMatch, setIsMatch] = createSignal(false);
    let mediaQueryLists: MediaQueryList[] = [];

    const checkMatch = () => {
        const matches = mediaQueryLists.some(mql => mql.matches);
        setIsMatch(matches);
    };

    createEffect(() => {
        mediaQueryLists.forEach(mql => {
            mql.removeEventListener('change', checkMatch);
        });

        const queries = Array.isArray(props.query) ? props.query : [props.query];
        mediaQueryLists = queries.map(buildMediaQueryString).map(q => window.matchMedia(q));

        mediaQueryLists.forEach(mql => {
            mql.addEventListener('change', checkMatch);
        });

        checkMatch();
    });

    onCleanup(() => {
        mediaQueryLists.forEach(mql => {
            mql.removeEventListener('change', checkMatch);
        });
    });

    return { isMatch };
};
