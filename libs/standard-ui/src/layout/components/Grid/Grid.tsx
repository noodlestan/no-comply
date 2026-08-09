import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { GRID_PROPS } from './constants';
import { createGrid } from './createGrid';
import type { GridProps } from './types';

type Props = ClosedTagProps & GridProps;

export const Grid: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, GRID_PROPS);

	const { $root } = createGrid(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
