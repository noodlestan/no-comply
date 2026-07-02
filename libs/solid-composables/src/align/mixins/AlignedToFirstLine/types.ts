import type { ClassList } from '@no-comply/solid-primitives';

export type AlignedToFirstLineTargetProp = 'target' | true | undefined;

export type AlignedToFirstLineMeasureProp = 'measure' | true | undefined;

export type AlignedToFirstLineProp = AlignedToFirstLineTargetProp | AlignedToFirstLineMeasureProp;

export type AlignedToFirstLineMixinProps = {
	/**
	 * When wrapped in {@link component:AlignFirstLine}, aligns this component vertically with the first line of any adjacent aligned text.
	 *
	 *  @default false
	 */
	alignFirstLine?: AlignedToFirstLineProp;
};

/**
 * Composed by sized text mixins, such as DisplayMixin
 */
export type AlignedToFirstLineTargetProps = {
	alignFirstLine?: AlignedToFirstLineTargetProp;
};

/**
 * Composed by other sized component mixins, such as SizedIconMixin
 */
export type AlignedToFirstLineMeasureProps = {
	alignFirstLine?: AlignedToFirstLineMeasureProp;
};

export type AlignedToFirstLineMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
