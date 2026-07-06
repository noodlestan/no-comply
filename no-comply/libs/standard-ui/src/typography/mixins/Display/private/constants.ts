import type { ContentSize } from '../../../../size';
import type { DisplayLevel, DisplayVariant } from '../types';

export const MAP_LEVEL_TO_SIZE_OR_VARIANT: Record<
	DisplayLevel,
	[ContentSize] | [undefined, DisplayVariant]
> = {
	1: [undefined, 'huge'],
	2: ['large'],
	3: ['medium'],
	4: ['normal'],
	5: ['small'],
	6: [undefined, 'tiny'],
};
