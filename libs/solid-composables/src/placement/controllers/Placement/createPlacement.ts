import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { PLACEMENT_AXIS_BLOCK as BLOCK, PLACEMENT_AXIS_INLINE as INLINE } from '../../constants';
import { getPlacementAnchors, inViewport, resolveAxis } from '../../private';
import type { PlacementAnchorsNormalized } from '../../types';

import { $PLACEMENT } from './constants';
import type { PlacementAPI, PlacementProps } from './types';

export const createPlacement = (props: PlacementProps): PlacementAPI => {
    const [locals, expose] = createExposable($PLACEMENT, props);

    let anchorEl: HTMLElement | null = null;
    let targetEl: HTMLElement | null = null;

    const setAnchorRef = (el: HTMLElement) => (anchorEl = el);
    const setPopoverRef = (el: HTMLElement) => (targetEl = el);

    const $anchor = {
        ref: setAnchorRef,
    };

    const $target = {
        ref: setPopoverRef,
    };

    const anchors = (): PlacementAnchorsNormalized => {
        return getPlacementAnchors(locals.placement, locals.anchor, locals.direction, locals.flip);
    };

    const update = () => {
        if (!anchorEl || !targetEl) {
            return;
        }

        const anchorRect = anchorEl.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();
        const anchorsToTest = anchors();

        for (const [anchor, target] of anchorsToTest) {
            const x = resolveAxis(anchorRect, targetRect, anchor[1], target[1], INLINE);
            const y = resolveAxis(anchorRect, targetRect, anchor[0], target[0], BLOCK);

            const fits = inViewport(x, y, targetRect.width, targetRect.height);

            if (fits) {
                targetEl.setAttribute('data-placed', '');
                targetEl.style.setProperty('--__top', `${y}px`);
                targetEl.style.setProperty('--__left', `${x}px`);
                return;
            }
        }
    };

    const reset = () => {
        if (!targetEl) {
            return;
        }
        targetEl.removeAttribute('data-placed');
        targetEl.style.removeProperty('--__top');
        targetEl.style.removeProperty('--__left');
    };

    return exposeAPI(expose, ['$anchor', '$target'], {
        $anchor,
        $target,
        update,
        reset,
    });
};
