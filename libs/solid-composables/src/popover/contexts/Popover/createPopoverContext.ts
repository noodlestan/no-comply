import { shortId } from '@no-comply/solid-primitives';
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
        setPopoverRef,
        dismiss,
        dismissStack,
        popoverEl: () => popoverEl,
    };

    return [context];
};
