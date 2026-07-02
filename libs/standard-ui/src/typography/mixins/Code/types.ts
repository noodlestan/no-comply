import type {
	SizedTypographyMixinAPI,
	SizedTypographyMixinProps,
	TypographyMixinAPI,
	TypographyMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../size';

export type CodeMixinProps = TypographyMixinProps &
	SizedTypographyMixinProps & {
		size?: ContentSize;
	};

export type CodeMixinAPI = {
	$root: TypographyMixinAPI['$root'] &
		SizedTypographyMixinAPI['$root'] & {
			classList: ClassList;
		};
};
