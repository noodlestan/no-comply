import { type ClassList, type ResponsiveProp, type Styles } from '@no-comply/solid-primitives';

import type { GridAlign, GridFlow, LayoutGapProps } from '../../types';

export type GridMixinProps = LayoutGapProps & {
	columns?: string | number;
	rows?: string | number;
	areas?: ResponsiveProp<string>;
	flow?: ResponsiveProp<GridFlow>;
	justifyItems?: ResponsiveProp<GridAlign>;
	alignItems?: ResponsiveProp<GridAlign>;
	justifyContent?: ResponsiveProp<GridAlign>;
	alignContent?: ResponsiveProp<GridAlign>;
	autoRows?: ResponsiveProp<string | number>;
	autoColumns?: ResponsiveProp<string | number>;
	inline?: ResponsiveProp<boolean>;
};

export type GridMixinAPI = {
	$root: {
		classList: ClassList;
		style: Styles;
	};
};
