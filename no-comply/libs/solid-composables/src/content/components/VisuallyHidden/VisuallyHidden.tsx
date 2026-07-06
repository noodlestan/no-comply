import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { VISUALLY_HIDDEN_PROPS } from './constants';
import { createVisuallyHidden } from './createVisuallyHidden';
import type { VisuallyHiddenProps } from './types';

type Props = ClosedTagProps & VisuallyHiddenProps;

/**
 * Hides children with CSS keeping it in the accessibility tree.
 *
 * Allows setting an optional role and chosing the tag.
 */
export const VisuallyHidden: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props as VisuallyHiddenProps, VISUALLY_HIDDEN_PROPS);

	const { $root: visuallyHidden } = createVisuallyHidden(locals);

	const $ = combineProps($others, visuallyHidden);

	return <Dynamic {...$} />;
};
