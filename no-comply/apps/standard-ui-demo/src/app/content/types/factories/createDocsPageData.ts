import type { DocsPageData } from '../types';

export const createDocsPageData = (data: Omit<DocsPageData, 'type' | 'content'>): DocsPageData => {
	return {
		...data,
		type: 'page',
	};
};
