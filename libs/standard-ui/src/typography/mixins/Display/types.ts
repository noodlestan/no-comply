import type { TypographyMixinAPI, TypographyMixinProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { DisplayLevel, DisplayVariant } from '../../types';

export type DisplayMixinProps = TypographyMixinProps & {
	level?: DisplayLevel;
	variant?: DisplayVariant;
};

export type DisplayMixinAPI = {
	$root: TypographyMixinAPI['$root'] & {
		classList: ClassList;
	};
	level: Accessor<DisplayLevel>;
};
