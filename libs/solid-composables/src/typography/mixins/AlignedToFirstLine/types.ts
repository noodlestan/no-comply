import type { ClassList } from '@no-comply/solid-primitives';

export type AlignedToFirstLineMixinProps = {
	/**
	 * When wrapped in {@link component:AlignFirstLine}, aligns this component vertically with the first line of any adjacent aligned text.
	 *
	 *  @default false
	 */
	aligned?: boolean;
};

export type AlignedToFirstLineMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
