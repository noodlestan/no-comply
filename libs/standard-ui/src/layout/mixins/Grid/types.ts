import {
	type GridMixinAPI as HeadlessGridMixinAPI,
	type GridMixinProps as HeadlessGridMixinProps,
	type LayoutGapProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

export type GridMixinProps = Omit<HeadlessGridMixinProps, keyof LayoutGapProps> &
	LayoutGapProps<GridGap>;

export type GridGap = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export type GridMixinAPI = {
	$root: HeadlessGridMixinAPI['$root'] & {
		classList: ClassList;
	};
};
