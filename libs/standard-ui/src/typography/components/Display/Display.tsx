import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { DISPLAY_PROPS } from './constants';
import { createDisplay } from './createDisplay';
import type { DisplayProps } from './types';

type Props = ClosedTagProps & DisplayProps;

export const Display: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, DISPLAY_PROPS);

	const { $root } = createDisplay(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
