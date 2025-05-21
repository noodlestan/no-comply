import { PLACEMENT_AXIS_BLOCK as BLOCK, PLACEMENT_AXIS_INLINE as INLINE } from '../../constants';
import type { PlacementAxis } from '../../types';

export function flipAxis(axis: PlacementAxis): PlacementAxis {
    return axis === BLOCK ? INLINE : BLOCK;
}
