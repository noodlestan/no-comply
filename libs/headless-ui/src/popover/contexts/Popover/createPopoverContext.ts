import { shortId } from '@noodlestan/context-ui-primitives';
import { createMemo } from 'solid-js';

import { usePopoverMaybe } from '../../providers';

import type { PopoverContext, PopoverContextOptions, PopoverContextValue } from './types';

export const createPopoverContext = (props: PopoverContextOptions): PopoverContextValue => {
    let popoverEl: HTMLElement;

    const randomId = createMemo(shortId);
    const id = () => props.id ?? randomId();

    const parentPopover = usePopoverMaybe();

    const setPopoverRef = (el: HTMLElement) => {
        popoverEl = el;
    };

    const isShown = () => {
        return popoverEl?.matches(':popover-open');
    };

    const setFocus = () => {
        if (!popoverEl) {
            return;
        }
        const el = popoverEl.querySelector('[data-popover-focus-target]') as HTMLElement;
        if (!el) {
            return;
        }
        const tabIndex = el.tabIndex;
        el.tabIndex = 0;
        el.focus();
        el.tabIndex = tabIndex ?? -1;
    };

    const dismiss = () => {
        popoverEl?.hidePopover();
    };

    const dismissStack = () => {
        dismiss();
        parentPopover?.dismissStack();
    };

    const context: PopoverContext = {
        type: 'popover',
        id,
        isShown,
        setFocus,
        setPopoverRef,
        dismiss,
        dismissStack,
        popoverEl: () => popoverEl,
    };

    return [context];
};
