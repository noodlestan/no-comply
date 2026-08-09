import {
	PLACEMENT_AXIS_BLOCK,
	PLACEMENT_AXIS_INLINE,
	PLACEMENT_SIDE_CENTER,
	PLACEMENT_SIDE_START,
} from '../../constants';
import type { PlacementAnchorTuple, PlacementAxis } from '../../types';

import { flipSide } from './flipSide';

export const createTargetFromAnchor = (
	[blockSide, inlineSide]: PlacementAnchorTuple,
	direction: PlacementAxis,
): PlacementAnchorTuple => {
	const flippedBlock =
		blockSide === PLACEMENT_SIDE_CENTER ? PLACEMENT_SIDE_START : flipSide(blockSide);
	const flippedInline =
		inlineSide === PLACEMENT_SIDE_CENTER ? PLACEMENT_SIDE_START : flipSide(inlineSide);

	const targetBlock = direction === PLACEMENT_AXIS_BLOCK ? flippedBlock : blockSide;
	const targetInline = direction === PLACEMENT_AXIS_INLINE ? flippedInline : inlineSide;

	return [targetBlock, targetInline];
};
