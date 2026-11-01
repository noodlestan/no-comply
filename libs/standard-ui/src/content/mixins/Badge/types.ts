import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type {
	ComposeColorsMixinAPI,
	ContentPaletteMixinAPI,
	ContentPaletteVariant,
} from '../../../color';
import type { ContentSize } from '../../../size';
import type { TextMixinAPI } from '../../../typography';
import type { SizedContentMixinAPI, SizedContentMixinProps } from '../SizedContent';

export type BadgeMixinProps = Omit<SizedContentMixinProps, 'scale'> & {
	/**
	 * Selects the colour palette of the badge.
	 *
	 * @default neutral
	 */
	color?: ContentPaletteVariant;
};

export type BadgeMixinAPI = {
	$root: SizedContentMixinAPI['$root'] &
		ContentPaletteMixinAPI['$root'] &
		ComposeColorsMixinAPI['$root'] &
		TextMixinAPI['$root'] & {
			classList: ClassList;
		};
	size: Accessor<ContentSize>;
	palette: Accessor<ContentPaletteVariant>;
};
