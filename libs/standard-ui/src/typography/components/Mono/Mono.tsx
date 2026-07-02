import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { MONO_PROPS } from './constants';
import { createMono } from './createMono';
import type { MonoProps } from './types';

type Props = ClosedTagProps & MonoProps;

export const Mono: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, MONO_PROPS);

	const { $root } = createMono(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
