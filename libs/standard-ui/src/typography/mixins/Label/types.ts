import type { TypographyMixinAPI, TypographyMixinProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { LabelVariant } from '../../types';

export type LabelMixinProps = TypographyMixinProps & {
	variant?: LabelVariant;
};

export type LabelMixinAPI = {
	$root: TypographyMixinAPI['$root'] & {
		classList: ClassList;
	};
};
