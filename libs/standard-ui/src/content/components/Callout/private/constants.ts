import type { FlexGap, LayoutPaddingShorthand } from '../../../../layout';
import type { ContentSize } from '../../../../size';
import type { CalloutSize } from '../types';

type CalloutSizeAttributes = {
	padding: LayoutPaddingShorthand;
	gap: FlexGap;
	titleSize: ContentSize;
	textSize: ContentSize;
	iconSize: ContentSize;
};

export const SIZE_MAP: Record<CalloutSize, CalloutSizeAttributes> = {
	small: {
		padding: ['s', 'm'],
		gap: 's',
		titleSize: 'small',
		textSize: 'small',
		iconSize: 'small',
	},
	normal: {
		padding: ['s', 'm'],
		gap: 'm',
		titleSize: 'normal',
		textSize: 'normal',
		iconSize: 'normal',
	},
	medium: {
		padding: 'm',
		gap: 'l',
		titleSize: 'medium',
		textSize: 'medium',
		iconSize: 'medium',
	},
};
