import type {
	SizedTypographyMixinAPI,
	SizedTypographyMixinProps,
	TypographyMixinAPI,
	TypographyMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../size';

export type MonoMixinProps = TypographyMixinProps &
	SizedTypographyMixinProps & {
		size?: ContentSize;
	};

export type MonoMixinAPI = {
	$root: TypographyMixinAPI['$root'] &
		SizedTypographyMixinAPI['$root'] & {
			classList: ClassList;
		};
};
