import type { FlexGap, LayoutPaddingShorthand } from '../../../../layout';
import type { ContentSize } from '../../../../size';
import type { ToastMessageSize } from '../types';

type ToastMessageSizeAttributes = {
	padding: LayoutPaddingShorthand;
	gap: FlexGap;
	titleSize: ContentSize;
	textSize: ContentSize;
};

export const SIZE_MAP: Record<ToastMessageSize, ToastMessageSizeAttributes> = {
	small: {
		padding: ['s', 'm'],
		gap: 's',
		titleSize: 'small',
		textSize: 'small',
	},
	normal: {
		padding: ['s', 'm'],
		gap: 'm',
		titleSize: 'normal',
		textSize: 'normal',
	},
	medium: {
		padding: 'm',
		gap: 'l',
		titleSize: 'medium',
		textSize: 'medium',
	},
};
