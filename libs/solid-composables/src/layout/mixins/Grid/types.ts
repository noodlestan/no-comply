import { type ClassList, type ResponsiveProp } from '@no-comply/solid-primitives';

import type { GridAlign, GridFlow, LayoutGapProps } from '../../types';

export type GridMixinProps = LayoutGapProps & {
	columns?: ResponsiveProp<string | number>;
	rows?: ResponsiveProp<string | number>;
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
	};
};
