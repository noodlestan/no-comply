import type { ClassList } from '@no-comply/solid-primitives';

export type ComposeColorsMixinProps = {
	/**
	 * Applies the composed colour to `color`.
	 *
	 * @default false
	 */
	fg?: boolean;
	/**
	 * Applies the composed colour to `background-color`.
	 *
	 * @default false
	 */
	bg?: boolean;
	/**
	 * Applies the composed colour to `border-color`.
	 *
	 * @default false
	 */
	border?: boolean;
};

export type ComposeColorsMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
