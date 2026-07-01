import type { TypographyMixinAPI, TypographyMixinProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { CodeVariant } from '../../types';

export type CodeMixinProps = TypographyMixinProps & {
	variant?: CodeVariant;
};

export type CodeMixinAPI = {
	$root: TypographyMixinAPI['$root'] & {
		classList: ClassList;
	};
};
