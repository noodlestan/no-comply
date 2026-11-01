import type {
	AlignedToFirstLineMeasureProps,
	AlignedToFirstLineMixinAPI,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ContentScale, ContentSize } from '../../../size';

export type SizedContentMixinProps = AlignedToFirstLineMeasureProps & {
	/**
	 * Sets the content size
	 *
	 * @default normal
	 */
	size?: ContentSize;
	/**
	 * Shifts the size scale: `down` maps sizes one step smaller, `up` one step larger.
	 *
	 * @default normal
	 */
	scale?: ContentScale;
};

export type SizedContentMixinAPI = {
	$root: AlignedToFirstLineMixinAPI['$root'] & {
		classList: ClassList;
	};
	size: Accessor<ContentSize>;
	scale: Accessor<ContentScale>;
};
