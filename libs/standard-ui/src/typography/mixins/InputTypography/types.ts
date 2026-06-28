import type { TypographyMixinAPI, TypographyMixinProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { TextVariant } from '../../types';

export type InputTypographyMixinProps = TypographyMixinProps & {
	variant?: TextVariant;
};

export type InputTypographyMixinAPI = {
	$root: TypographyMixinAPI['$root'] & {
		classList: ClassList;
	};
};
