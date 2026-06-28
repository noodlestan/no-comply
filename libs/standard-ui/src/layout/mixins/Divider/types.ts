import type {
	DividerMixinAPI as HeadlessDividerMixinAPI,
	DividerMixinProps as HeadlessDividerMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList, Styles } from '@no-comply/solid-primitives';

import type { DividerLengthProp, DividerVariant } from '../../types';

export type DividerMixinProps = HeadlessDividerMixinProps & {
	variant?: DividerVariant;
	length?: DividerLengthProp;
};

export type DividerMixinAPI = {
	$root: HeadlessDividerMixinAPI['$root'] & {
		style: Styles;
		classList: ClassList;
	};
};
