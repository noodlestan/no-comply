import type { PlacementAnchor, PlacementAnchorTuple } from '../../types';

export const normalizeAnchor = (anchor: PlacementAnchor): PlacementAnchorTuple => {
    return anchor.split('-') as PlacementAnchorTuple;
};
