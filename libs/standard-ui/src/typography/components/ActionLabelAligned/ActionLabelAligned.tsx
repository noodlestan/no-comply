import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { ACTION_LABEL_ALIGNED_PROPS } from './constants';
import { createActionLabelAligned } from './createActionLabelAligned';
import type { ActionLabelAlignedProps } from './types';

/**
 * Typography options – defined by {@link @no-comply/standard-ui/typography/mixin/ActionLabel#ActionLabelMixinProps} – should be passed directly to the {@link component:AlignFirstLine} wrapper.
 */
type Props = ClosedTagProps & ActionLabelAlignedProps;

export const ActionLabelAligned: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, ACTION_LABEL_ALIGNED_PROPS);

	const { $root } = createActionLabelAligned(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
