import type { ClassList } from '@no-comply/solid-primitives';

type AlignedToFirstLineTargetProp = 'target' | true | undefined;

type AlignedToFirstLineMeasureProp = 'measure' | true | undefined;

type AlignedToFirstLineProp = AlignedToFirstLineTargetProp | AlignedToFirstLineMeasureProp;

/**
 * Do not compose this type. Compose {@link AlignedToFirstLine#AlignedToFirstLineTargetProps} or {@link AlignedToFirstLine#AlignedToFirstLineMeasureProps} instead,
 * depending on whether.
 *
 * @link SizedTypographyMixin#SizedTypographyMixinProps Target example (SizedTypography)
 * @link mixin:SizedIcon#SizedIconMixinProps Measured example (SizedIcon)
 */
export type AlignedToFirstLineMixinProps = {
	/**
	 * When wrapped in {@link AlignFirstLine}, aligns components vertically with the first line of a text element.
	 */
	alignFirstLine?: AlignedToFirstLineProp;
};

/**
 * Composed by sized text mixins, such as DisplayMixin
 */
export type AlignedToFirstLineTargetProps = {
	/**
	 * When wrapped in {@link AlignFirstLine}, aligns other components vertically with the first line of this text.
	 *
	 * Set to 'target' to center other components with the text first line.
	 *
	 * Set to 'true' to center this component to the target's first line.
	 */
	alignFirstLine?: AlignedToFirstLineTargetProp;
};

/**
 * Composed by other sized component mixins, such as SizedIconMixin
 */
export type AlignedToFirstLineMeasureProps = {
	/**
	 * When wrapped in {@link AlignFirstLine}, aligns this component vertically with the first line of an adjacent aligned text.
	 *
	 * Set to 'measure' to compare this component's height with the first line of the aligned text in order to adjust the vertical offset.
	 *
	 * Set to 'true' to center this component to the target's first line.
	 */
	alignFirstLine?: AlignedToFirstLineMeasureProp;
};

/**
 * Composes the CSS class that verticallt alignes the element.
 */
export type AlignedToFirstLineMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
