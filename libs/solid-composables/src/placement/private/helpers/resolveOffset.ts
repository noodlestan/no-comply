import { PLACEMENT_SIDE_CENTER as CENTER, PLACEMENT_SIDE_START as START } from '../../constants';
import type { PlacementAnchorSide } from '../../types';

export const resolveOffset = (side: PlacementAnchorSide, size: number): number => {
	if (side === START) {
		return 0;
	}
	if (side === CENTER) {
		return size / 2;
	}
	return size;
};
