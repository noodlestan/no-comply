import {
	PLACEMENT_SIDE_CENTER as CENTER,
	PLACEMENT_SIDE_END as END,
	PLACEMENT_SIDE_START as START,
} from '../../constants';
import type { PlacementAnchorSide } from '../../types';

export function flipSide(side: PlacementAnchorSide): PlacementAnchorSide {
	if (side === START) {
		return END;
	}
	if (side === END) {
		return START;
	}
	return CENTER;
}
