import { PLACEMENT_AXIS_INLINE as INLINE } from '../../constants';
import type { PlacementAnchorSide, PlacementAxis } from '../../types';

import { resolveOffset } from './resolveOffset';

export const resolveAxis = (
	anchorRect: DOMRect,
	targetRect: DOMRect,
	anchorSide: PlacementAnchorSide,
	targetSide: PlacementAnchorSide,
	axis: PlacementAxis,
): number => {
	const anchorStart = axis === INLINE ? anchorRect.left : anchorRect.top;
	const anchorSize = axis === INLINE ? anchorRect.width : anchorRect.height;
	const targetSize = axis === INLINE ? targetRect.width : targetRect.height;

	const anchorOffset = resolveOffset(anchorSide, anchorSize);
	const targetOffset = resolveOffset(targetSide, targetSize);

	return anchorStart + anchorOffset - targetOffset;
};
