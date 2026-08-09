import type { ComponentEntityData } from '@no-comply/meta';

import type { DocsComponentPageData, DocsPageData } from '../types';

export const createDocsComponentPageData = (
	component: ComponentEntityData,
	data: Omit<DocsPageData, 'type' | 'title'>,
): DocsComponentPageData => {
	return {
		...data,
		type: 'page',
		title: component.name,
		component,
	};
};
