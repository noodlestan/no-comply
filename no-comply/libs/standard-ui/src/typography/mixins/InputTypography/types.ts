import type { TypographyMixinAPI, TypographyMixinProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../size';

export type InputTypographyMixinProps = TypographyMixinProps & {
	size?: ContentSize;
};

export type InputTypographyMixinAPI = {
	$root: TypographyMixinAPI['$root'] & {
		classList: ClassList;
	};
};
