import type {
	AxisShorthandProp,
	ResponsiveProp,
	SideShorthandProp,
} from '@no-comply/solid-primitives';

export type LayoutStretch = 'none' | 'width' | 'height' | 'full';
export type LayoutOverflow = 'auto' | 'x-auto' | 'y-auto' | 'hidden' | 'visible';

export type LayoutGapProps<T extends string = string> = {
	gap?: AxisShorthandProp<ResponsiveProp<T>>;
	rowGap?: ResponsiveProp<T>;
	columnGap?: ResponsiveProp<T>;
};

export type LayoutPaddingProps<T extends string = string> = {
	padding?: SideShorthandProp<ResponsiveProp<T>>;
	paddingBlock?: ResponsiveProp<T>;
	paddingBlockStart?: ResponsiveProp<T>;
	paddingBlockEnd?: ResponsiveProp<T>;
	paddingInline?: ResponsiveProp<T>;
	paddingInlineStart?: ResponsiveProp<T>;
	paddingInlineEnd?: ResponsiveProp<T>;
};

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexAlign = 'start' | 'center' | 'baseline' | 'end' | 'stretch';
export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';

export type GridFlow = 'row' | 'column' | 'dense' | 'row-dense' | 'column-dense';
export type GridAlign =
	| 'start'
	| 'end'
	| 'center'
	| 'stretch'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';
