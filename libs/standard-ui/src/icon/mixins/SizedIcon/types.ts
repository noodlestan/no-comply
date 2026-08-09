import type {
	AlignedToFirstLineMeasureProps,
	AlignedToFirstLineMixinAPI,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../size';

export type SizedIconMixinProps = AlignedToFirstLineMeasureProps & {
	/**
	 * Sets the icon size
	 *
	 * @default normal
	 */
	size?: ContentSize;
};

export type SizedIconMixinAPI = {
	$root: AlignedToFirstLineMixinAPI['$root'] & {
		classList: ClassList;
	};
	size: Accessor<ContentSize>;
};
