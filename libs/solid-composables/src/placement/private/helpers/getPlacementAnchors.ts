import {
    PLACEMENT_AXIS_BLOCK as BLOCK,
    PLACEMENT_SIDE_END as END,
    PLACEMENT_AXIS_INLINE as INLINE,
    PLACEMENT_SIDE_START as START,
} from '../../constants';
import type {
    PlacementAnchor,
    PlacementAnchorPairs,
    PlacementAnchorTuple,
    PlacementAnchorTuplePairs,
    PlacementAnchorsNormalized,
    PlacementAxis,
} from '../../types';

import { createTargetFromAnchor } from './createTargetFromAnchor';
import { deduplicatePairs } from './deduplicatePairs';
import { flipAnchor } from './flipAnchor';
import { flipAxis } from './flipDirection';
import { normalizeAnchor } from './normalizeAnchor';
import { normalizePlacementPairs } from './normalizePlacementPairs';

const DEFAULT_DIRECTION: PlacementAxis = BLOCK;
const DEFAULT_BLOCK_ANCHOR: PlacementAnchor = `${END}-${START}`;
const DEFAULT_INLINE_ANCHOR: PlacementAnchor = `${START}-${END}`;
const DEFAULT_FLIP: PlacementAxis = BLOCK;

type TuplePairs = PlacementAnchorTuplePairs;

const getAnchors = (
    anchor: PlacementAnchorTuple,
    direction: PlacementAxis,
    flip: PlacementAxis,
): PlacementAnchorsNormalized => {
    const anchor0 = anchor;
    const pair0: TuplePairs = [anchor0, createTargetFromAnchor(anchor0, direction)];

    const anchor1 = flipAnchor(anchor0, flip);
    const pair1: TuplePairs = [anchor1, createTargetFromAnchor(anchor1, direction)];

    const otherAxis: PlacementAxis = flip === BLOCK ? INLINE : BLOCK;

    const anchor2 = flipAnchor(anchor0, otherAxis);
    const pair2: TuplePairs = [anchor2, createTargetFromAnchor(anchor2, direction)];

    const anchor3 = flipAnchor(anchor1, otherAxis);
    const pair3: TuplePairs = [anchor3, createTargetFromAnchor(anchor3, direction)];

    return [pair0, pair1, pair2, pair3];
};

export const getPlacementAnchors = (
    maybePlacement?: PlacementAnchorPairs,
    maybeAnchor?: PlacementAnchor,
    maybeDirection?: PlacementAxis,
    maybeFlip?: PlacementAxis,
): PlacementAnchorsNormalized => {
    const direction = maybeDirection ?? DEFAULT_DIRECTION;
    const rawAnchor =
        maybeAnchor ?? (direction === BLOCK ? DEFAULT_BLOCK_ANCHOR : DEFAULT_INLINE_ANCHOR);
    const flip = maybeFlip ?? DEFAULT_FLIP;

    const anchor0 = normalizeAnchor(rawAnchor);
    const anchors = getAnchors(anchor0, direction, flip);
    const fallbacks = getAnchors(anchor0, flipAxis(direction), flip);

    if (maybePlacement) {
        const normalized = normalizePlacementPairs(maybePlacement);
        return deduplicatePairs(...normalized, ...anchors, ...fallbacks);
    }

    return [...anchors, ...fallbacks];
};
