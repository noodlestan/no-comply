import {
    PLACEMENT_AXIS_BLOCK as BLOCK,
    PLACEMENT_SIDE_END as END,
    PLACEMENT_SIDE_START as START,
} from '../constants';
import type { PlacementAnchor, PlacementAxis } from '../types';

export const DEFAULT_DIRECTION: PlacementAxis = BLOCK;
export const DEFAULT_BLOCK_ANCHOR: PlacementAnchor = `${END}-${START}`;
export const DEFAULT_INLINE_ANCHOR: PlacementAnchor = `${START}-${END}`;
export const DEFAULT_FLIP: PlacementAxis = BLOCK;
