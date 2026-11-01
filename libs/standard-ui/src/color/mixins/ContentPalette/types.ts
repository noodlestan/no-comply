import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ContentPaletteVariant } from '../../types';

export type ContentPaletteMixinProps = {
	/**
	 * Selects the palette stored in the `--__content-palette` variables.
	 *
	 * @default neutral
	 */
	palette?: ContentPaletteVariant;
};

export type ContentPaletteMixinAPI = {
	$root: {
		classList: ClassList;
	};
	palette: Accessor<ContentPaletteVariant>;
};
