import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { LAYOUT_BASE_PROPS } from './constants';
import { createLayoutBase } from './createLayoutBase';
import { type LayoutBaseProps } from './types';

type Props = ClosedTagProps & LayoutBaseProps;

export const LayoutBase: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, LAYOUT_BASE_PROPS);

	const { $root } = createLayoutBase(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
