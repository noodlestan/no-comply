import { createComputedProps, mergeProps, shortId } from '@noodlestan/context-ui-primitives';
import { createMemo } from 'solid-js';

import { createPlacement } from '../../../placement';
import { createPopover } from '../Popover';

import type {
    AnchoredPopoverAPI,
    AnchoredPopoverProps,
    AnchoredPopoverTriggerAPI,
    AnchoredPopoverTriggerProps,
} from './types';

export const createAnchoredPopoverTrigger = (
    props: AnchoredPopoverTriggerProps,
): AnchoredPopoverTriggerAPI => {
    const randomId = createMemo(shortId);
    const id = () => props.id ?? randomId();

    const $static = {
        popoverTargetAction: 'toggle',
        'aria-haspopup': 'true',
    } as const;

    const $localRoot = createComputedProps($static, {
        id,
        ref: () => props.ref,
        popoverTarget: () => props.targetId,
        'aria-expanded': () => props.expanded,
    });

    return {
        $root: $localRoot,
    };
};

export const createAnchoredPopover = (props: AnchoredPopoverProps = {}): AnchoredPopoverAPI => {
    const {
        $anchor,
        $target,
        update: updatePlacement,
        reset: resetPlacement,
    } = createPlacement(props);

    const popoverProps = mergeProps(props, {
        onShow: updatePlacement,
        onHide: resetPlacement,
    });
    const { $root: $popoverRoot, context, contextValue } = createPopover(popoverProps);

    const popoverStaticProps = { component: 'div' } as const;
    const $popover = mergeProps($popoverRoot, popoverStaticProps);

    const randomId = createMemo(shortId);
    const triggerId = () => props.id ?? randomId();

    const triggerProps = createComputedProps({
        id: triggerId,
        targetId: context.id,
        expanded: context.isShown,
    });
    const { $root: $triggerRoot } = createAnchoredPopoverTrigger(triggerProps);

    const contentProps = createComputedProps({
        id: context.id,
        labelledby: triggerId,
    });

    return {
        $root: mergeProps($popover, $target),
        $trigger: mergeProps($triggerRoot, $anchor),
        contentProps,
        context,
        contextValue,
    };
};
