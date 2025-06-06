import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { LAYOUT_PROPS } from './constants';
import { createLayout } from './createLayout';
import type { LayoutProps } from './types';

type Props = ClosedTagProps & LayoutProps;

export const Layout: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, LAYOUT_PROPS);

	const { $root } = createLayout(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
