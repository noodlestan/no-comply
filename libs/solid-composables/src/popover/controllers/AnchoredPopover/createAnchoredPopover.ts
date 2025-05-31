import { combineProps, computedProps, shortId } from '@no-comply/solid-primitives';
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

    const $root = computedProps($static, {
        id,
        ref: () => props.ref,
        popoverTarget: () => props.targetId,
        'aria-expanded': () => props.expanded,
    });

    return {
        $root,
    };
};

export const createAnchoredPopover = (props: AnchoredPopoverProps = {}): AnchoredPopoverAPI => {
    const {
        $anchor,
        $target,
        update: updatePlacement,
        reset: resetPlacement,
    } = createPlacement(props);

    const popoverProps = combineProps(props, {
        onShow: updatePlacement,
        onHide: resetPlacement,
    });
    const { $root: $popoverRoot, context, contextValue } = createPopover(popoverProps);

    const popoverStaticProps = { component: 'div' } as const;
    const $popover = combineProps($popoverRoot, popoverStaticProps);

    const randomId = createMemo(shortId);
    const triggerId = () => randomId();

    const triggerProps = computedProps({
        id: triggerId,
        targetId: context.id,
        expanded: context.isShown,
    });
    const { $root: $triggerRoot } = createAnchoredPopoverTrigger(triggerProps);

    const contentProps = computedProps({
        id: context.id,
        'aria-labelledby': triggerId,
    });

    return {
        $root: combineProps($popover, $target),
        $trigger: combineProps($triggerRoot, $anchor),
        contentProps,
        context,
        contextValue,
    };
};
