import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { CODE_PROPS } from './constants';
import { createCode } from './createCode';
import type { CodeProps } from './types';

type Props = ClosedTagProps & CodeProps;

export const Code: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, CODE_PROPS);

	const { $root } = createCode(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
