import type {
	AlignedToFirstLineMixinAPI,
	AlignedToFirstLineMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

export type InputBoxMixinProps = AlignedToFirstLineMixinProps;

export type InputBoxMixinAPI = {
	$root: AlignedToFirstLineMixinAPI['$root'] & {
		classList: ClassList;
	};
};
