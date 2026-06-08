import type { BreakpointName } from '@no-comply/standard-ui';
import type { JSX } from 'solid-js';

import type { DocsResponsiveItemData } from '../types';

export const createDocsResponsiveItemData = (
	bps: BreakpointName[],
	data: Omit<DocsResponsiveItemData, 'type' | 'content'>,
	content: () => JSX.Element,
): DocsResponsiveItemData => {
	const props = { ...data.props, bps };
	return {
		...data,
		type: 'item',
		props,
		content,
	};
};
