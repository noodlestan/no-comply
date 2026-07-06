import type {
	AlignedToFirstLineTargetProps,
	TypographyMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../size';
import type { InputTypographyMixinAPI } from '../../../typography';

export type SizedInputBoxMixinProps = TypographyMixinProps &
	AlignedToFirstLineTargetProps & {
		size?: ContentSize;
	};

export type SizedInputBoxMixinAPI = {
	$root: InputTypographyMixinAPI['$root'] & {
		classList: ClassList;
	};
	size: Accessor<ContentSize>;
};
