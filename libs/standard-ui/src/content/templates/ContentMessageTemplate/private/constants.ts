import type { FlexGap, LayoutPaddingShorthand } from '../../../../layout';
import type { SizeScale } from '../../../../size';
import type { DisplayVariant } from '../../../../typography';
import type { ContentMessageTemplateSize } from '../types';

export const SIZE_MAP: Record<
	ContentMessageTemplateSize,
	{
		alignment: SizeScale;
		padding: LayoutPaddingShorthand;
		gap: FlexGap;
		titleVariant: DisplayVariant;
	}
> = {
	small: {
		alignment: 'xs',
		padding: ['s', 'm'],
		gap: 's',
		titleVariant: 'xs',
	},
	normal: {
		alignment: 's',
		padding: ['s', 'm'],
		gap: 'm',
		titleVariant: 's',
	},
	medium: {
		alignment: 's',
		padding: 'm',
		gap: 'l',
		titleVariant: 'm',
	},
};
