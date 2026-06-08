import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { TEXT_ALIGNED_PROPS } from './constants';
import { createTextAligned } from './createTextAligned';
import type { TextAlignedProps } from './types';

/**
 * Typography options – defined by {@link @no-comply/standard-ui/typography/mixin/Text#TextMixinProps} – should be passed directly to the {@link component:AlignFirstLine} wrapper.
 */
type Props = ClosedTagProps & TextAlignedProps;

export const TextAligned: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, TEXT_ALIGNED_PROPS);

	const { $root } = createTextAligned(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
