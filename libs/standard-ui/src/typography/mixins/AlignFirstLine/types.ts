import type { AlignFirstLineMixinAPI as HeadlessAlignFirstLineMixinAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { SizeScale } from '../../../types';

export type AlignFirstLineMixinProps = {
	height: SizeScale;
};

export type AlignFirstLineMixinAPI = {
	$root: HeadlessAlignFirstLineMixinAPI['$root'] & {
		classList: ClassList;
	};
};
