import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { ICON_PROPS } from './constants';
import { createIcon } from './createIcon';
import type { IconProps } from './types';

type Props = ClosedTagProps & IconProps;

export const Icon: Component<Props> = props => {
	const [locals, $others] = splitProps(props, ICON_PROPS);

	const { $root } = createIcon(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
