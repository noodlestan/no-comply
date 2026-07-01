import type { HeadingTagName } from '@no-comply/solid-accessibility';

import type { DisplayLevel } from '../../../types';

export const MAP_LEVEL_TO_COMPONENT: Record<DisplayLevel, HeadingTagName> = {
	1: 'h1',
	2: 'h2',
	3: 'h3',
	4: 'h4',
	5: 'h5',
	6: 'h6',
};
