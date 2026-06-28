import type { TypographyMixinAPI, TypographyMixinProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { TextVariant } from '../../types';

export type TextMixinProps = TypographyMixinProps & {
	variant?: TextVariant;
};

export type TextMixinAPI = {
	$root: TypographyMixinAPI['$root'] & {
		classList: ClassList;
	};
};
