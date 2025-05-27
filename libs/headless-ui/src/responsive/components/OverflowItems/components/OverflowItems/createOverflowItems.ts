import {
    type ObjectWithId,
    createComputedProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';
import { createResizeObserver } from '@solid-primitives/resize-observer';
import { createEffect, onMount } from 'solid-js';

import { createOverflowItemsContext } from '../../private';

import styles from './OverflowItems.module.scss';
import type { OverflowItemsAPI, OverflowItemsProps } from './types';

export const createOverflowItems = <T extends ObjectWithId = ObjectWithId>(
    props: OverflowItemsProps<T>,
): OverflowItemsAPI => {
    const contextValue = createOverflowItemsContext(props);
    const [context, ownerAPI] = contextValue;

    let timeout: number | null = null;
    let rootEl: HTMLElement;
    let measureEl: HTMLElement;

    const setElementRef = (el: HTMLElement) => {
        rootEl = el;
    };

    const setMeasureRef = (el: HTMLElement) => {
        measureEl = el;
    };

    const runTest = () => {
        const { scrollWidth, clientWidth, scrollHeight, clientHeight } = measureEl;
        const isOverflowing = scrollWidth > clientWidth || scrollHeight > clientHeight;

        if (!isOverflowing) {
            ownerAPI.finishTest();
            return;
        }

        if (ownerAPI.nextTest()) {
            timeout = setTimeout(runTest, 100);
        }
    };

    const startTest = () => {
        if (timeout != null) {
            clearTimeout(timeout);
        }
        ownerAPI.startTest();
        timeout = setTimeout(runTest, 200);
    };

    createEffect(() => {
        if (!(props.items && props.currentItemId)) {
            return;
        }
        startTest();
    });

    onMount(() => {
        createResizeObserver(rootEl, () => {
            startTest();
        });
    });

    const $static = {
        ref: setElementRef,
        classList: staticClassList(styles, 'OverflowItems'),
    };
    const $root = createComputedProps($static, {
        'data-responsive-items-is-reflowing': () => (context.isReflowing() ? '' : undefined),
    });

    const $measure = {
        ref: setMeasureRef,
        inert: true,
        classList: staticClassList(styles, 'measure'),
    };

    const $render = {
        'data-responsive-items-container': '',
    };

    return {
        $root,
        $measure,
        $render,
        context,
        contextValue,
    };
};
