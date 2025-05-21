import { PLACEMENT_AXIS_BLOCK as BLOCK } from '../../constants';
import type { PlacementAnchorTuple, PlacementAxis } from '../../types';

import { flipSide } from './flipSide';

export const flipAnchor = (
    [a, b]: PlacementAnchorTuple,
    axis: PlacementAxis,
): PlacementAnchorTuple => {
    return axis === BLOCK ? [flipSide(a), b] : [a, flipSide(b)];
};
