import type { TypographyMixinAPI, TypographyMixinProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ActionLabelVariant } from '../../types';

export type ActionLabelMixinProps = TypographyMixinProps & {
	variant?: ActionLabelVariant;
};

export type ActionLabelMixinAPI = {
	$root: TypographyMixinAPI['$root'] & {
		classList: ClassList;
	};
};
