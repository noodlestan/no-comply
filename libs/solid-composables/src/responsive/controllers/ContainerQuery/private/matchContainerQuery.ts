import type { MediaQueryCriteria } from '../../../types';

import { mediaQuerCriteriaToPixels } from './mediaQueryCriteriaToPixels';

export const matchContainerQuery = (query: MediaQueryCriteria, element: HTMLElement): boolean => {
	const width = element.offsetWidth;
	const height = element.offsetHeight;

	const checks: boolean[] = [];

	if (query.minWidth) {
		const px = mediaQuerCriteriaToPixels(element, query.minWidth);
		checks.push(width >= px);
	}
	if (query.maxWidth) {
		const px = mediaQuerCriteriaToPixels(element, query.maxWidth);
		checks.push(width <= px);
	}
	if (query.minHeight) {
		const px = mediaQuerCriteriaToPixels(element, query.minHeight);
		checks.push(height >= px);
	}
	if (query.maxHeight) {
		const px = mediaQuerCriteriaToPixels(element, query.maxHeight);
		checks.push(height <= px);
	}

	return checks.every(Boolean);
};
