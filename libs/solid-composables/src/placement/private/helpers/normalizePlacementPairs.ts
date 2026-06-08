import type { PlacementAnchorPairs, PlacementAnchorsNormalized } from '../../types';

import { normalizeAnchor } from './normalizeAnchor';

export const normalizePlacementPairs = (
	pairs: PlacementAnchorPairs,
): PlacementAnchorsNormalized => {
	return pairs.map(([a, b]) => [
		normalizeAnchor(a),
		normalizeAnchor(b),
	]) as PlacementAnchorsNormalized;
};
