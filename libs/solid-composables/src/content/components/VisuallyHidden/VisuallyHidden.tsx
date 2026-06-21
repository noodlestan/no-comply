import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { VISUALLY_HIDDEN_PROPS } from './constants';
import { createVisuallyHidden } from './createVisuallyHidden';
import type { VisuallyHiddenProps } from './types';

type Props = ClosedTagProps & VisuallyHiddenProps;

export const VisuallyHidden: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props as VisuallyHiddenProps, VISUALLY_HIDDEN_PROPS);

	const { $root: visuallyHidden } = createVisuallyHidden(locals);

	const $ = combineProps($others, visuallyHidden);

	return <Dynamic {...$} />;
};
