import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { TEXT_ALIGNED_PROPS } from './constants';
import { createTextAligned } from './createTextAligned';
import type { TextAlignedProps } from './types';

type Props = ClosedTagProps & TextAlignedProps;

export const TextAligned: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, TEXT_ALIGNED_PROPS);

	const { $root } = createTextAligned(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
