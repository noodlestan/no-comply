import type { JSX } from 'solid-js';

import type { DocsItemData } from '../types';

export const createDocsItemData = (
	data: Omit<DocsItemData, 'type' | 'content'>,
	content: () => JSX.Element,
): DocsItemData => {
	return {
		...data,
		type: 'item',
		content,
	};
};
