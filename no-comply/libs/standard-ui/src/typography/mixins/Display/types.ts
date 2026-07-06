import type {
	SizedTypographyMixinAPI,
	SizedTypographyMixinProps,
	TypographyMixinAPI,
	TypographyMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../size';

export type DisplayLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type DisplayVariant = 'huge' | 'tiny';

export type DisplayMixinProps = TypographyMixinProps &
	SizedTypographyMixinProps & {
		size?: ContentSize;
		level?: DisplayLevel;
		variant?: DisplayVariant;
	};

export type DisplayMixinAPI = {
	$root: TypographyMixinAPI['$root'] &
		SizedTypographyMixinAPI['$root'] & {
			classList: ClassList;
		};
	level: Accessor<DisplayLevel>;
};
