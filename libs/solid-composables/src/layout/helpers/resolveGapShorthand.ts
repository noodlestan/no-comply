import type {
	AxisShorthandPropValues,
	AxisShorthandResolved,
	ResponsiveProp,
} from '@no-comply/solid-primitives';
import { type Accessor } from 'solid-js';

import type { LayoutGapProps } from '../types';

const EMPTY = undefined;

export const resolveGapProps = (
	props: LayoutGapProps,
): Accessor<AxisShorthandResolved<ResponsiveProp<string | undefined>>> => {
	return () => {
		const pad = props.gap;
		if (Array.isArray(pad)) {
			const ps = props.gap as AxisShorthandPropValues<string>;
			if (ps.length === 1) {
				return [ps[0], EMPTY, EMPTY];
			}
			return [EMPTY, ps[0], ps[1]];
		} else
			return [pad, props.rowGap, props.columnGap] as AxisShorthandResolved<
				ResponsiveProp<string | undefined>
			>;
	};
};
