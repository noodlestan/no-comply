import type {
	PlacementAnchor,
	PlacementAnchorPairs,
	PlacementAxis,
	PlacementGap,
} from '../../types';

export type PlacementProps = {
	anchor?: PlacementAnchor;
	direction?: PlacementAxis;
	flip?: PlacementAxis;
	gap?: PlacementGap;
	placement?: PlacementAnchorPairs;
};

export type PlacementAPI = {
	$anchor: {
		ref: (el: HTMLElement) => void;
	};
	$target: {
		ref: (el: HTMLElement) => void;
	};
	update: () => void;
	reset: () => void;
};
