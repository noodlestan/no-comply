import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { DIVIDER_PROPS } from './constants';
import { createDivider } from './createDivider';
import type { DividerProps } from './types';

type Props = ClosedTagProps & DividerProps;

export const Divider: Component<Props> = props => {
	const [locals, $others] = splitProps(props, DIVIDER_PROPS);

	const { $root } = createDivider(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
