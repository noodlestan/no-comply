import type { PlacementAnchorTuplePairs, PlacementAnchorsNormalized } from '../../types';

export const deduplicatePairs = (
    ...pairs: PlacementAnchorTuplePairs[]
): PlacementAnchorsNormalized => {
    const seen = new Set<string>();
    const result: PlacementAnchorTuplePairs[] = [];

    for (const [anchor, target] of pairs) {
        const key = `${anchor[0]}-${anchor[1]}|${target[0]}-${target[1]}`;
        if (!seen.has(key)) {
            seen.add(key);
            result.push([anchor, target]);
        }
    }

    return result as PlacementAnchorsNormalized;
};
