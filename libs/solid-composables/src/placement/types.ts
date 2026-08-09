import type { PLACEMENT_AXES, PLACEMENT_SIDES } from './constants';

export type PlacementAxis = (typeof PLACEMENT_AXES)[number];

export type PlacementAnchorSide = (typeof PLACEMENT_SIDES)[number];

export type PlacementAnchor = `${PlacementAnchorSide}-${PlacementAnchorSide}`;

export type PlacementAnchorPairs = [PlacementAnchor, PlacementAnchor][];

export type PlacementGap =
	| string
	| {
			block?: string;
			inline?: string;
	  };

export type PlacementAnchorTuple = [PlacementAnchorSide, PlacementAnchorSide];
export type PlacementAnchorTuplePairs = [PlacementAnchorTuple, PlacementAnchorTuple];
export type PlacementAnchorsNormalized = [PlacementAnchorTuple, PlacementAnchorTuple][];
