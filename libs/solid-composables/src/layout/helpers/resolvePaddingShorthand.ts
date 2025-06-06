import type {
	ResponsiveProp,
	SideShorthandPropValues,
	SideShorthandResolved,
} from '@no-comply/solid-primitives';
import { type Accessor } from 'solid-js';

import type { LayoutPaddingProps } from '../types';

const EMPTY = undefined;

export const resolvePaddingProps = (
	props: LayoutPaddingProps,
): Accessor<SideShorthandResolved<ResponsiveProp<string | undefined>>> => {
	return () => {
		const pad = props.padding;
		if (Array.isArray(pad)) {
			const ps = props.padding as SideShorthandPropValues<string>;
			if (!ps.length) {
				return [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
			}
			if (ps.length === 1) {
				return [ps[0], EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
			}
			if (ps.length === 2) {
				return [EMPTY, ps[0], EMPTY, EMPTY, ps[1], EMPTY, EMPTY];
			}
			if (ps.length === 3) {
				return [EMPTY, EMPTY, ps[0], ps[2], ps[1], EMPTY, EMPTY];
			}
			return [EMPTY, EMPTY, ps[0], ps[2], EMPTY, ps[1], ps[3]];
		} else
			return [
				pad,
				props.paddingBlock,
				props.paddingBlockStart,
				props.paddingBlockEnd,
				props.paddingInline,
				props.paddingInlineStart,
				props.paddingInlineEnd,
			] as SideShorthandResolved<ResponsiveProp<string | undefined>>;
	};
};
