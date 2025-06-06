import type { ComponentMetadata } from '../../../../data';
import type { DocsComponentPageData, DocsPageData } from '../types';

export const createDocsComponentPageData = (
	component: ComponentMetadata,
	data: Omit<DocsPageData, 'type' | 'content' | 'title'>,
): DocsComponentPageData => {
	return {
		...data,
		type: 'page',
		title: component.name,
		component,
	};
};
