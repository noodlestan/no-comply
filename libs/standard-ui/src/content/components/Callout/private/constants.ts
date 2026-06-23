import type { FlexGap, LayoutPaddingShorthand } from '../../../../layout';
import type { SizeScale } from '../../../../size';
import type { DisplayVariant, TextVariant } from '../../../../typography';
import type { CalloutSize } from '../types';

type CalloutSizeAttributes = {
	alignment: SizeScale;
	padding: LayoutPaddingShorthand;
	gap: FlexGap;
	titleVariant: DisplayVariant;
	textVariant: TextVariant;
};

export const SIZE_MAP: Record<CalloutSize, CalloutSizeAttributes> = {
	small: {
		alignment: 'xs',
		padding: ['s', 'm'],
		gap: 's',
		titleVariant: 'xs',
		textVariant: 'small',
	},
	normal: {
		alignment: 's',
		padding: ['s', 'm'],
		gap: 'm',
		titleVariant: 's',
		textVariant: 'normal',
	},
	medium: {
		alignment: 's',
		padding: 'm',
		gap: 'l',
		titleVariant: 'm',
		textVariant: 'medium',
	},
};
