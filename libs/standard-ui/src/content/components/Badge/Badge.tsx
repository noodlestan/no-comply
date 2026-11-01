import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { BADGE_PROPS } from './constants';
import { createBadge } from './createBadge';
import type { BadgeProps } from './types';

type Props = ClosedTagProps & BadgeProps;

export const Badge: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, [...BADGE_PROPS, 'children']);

	const { $root } = createBadge(locals);
	const $ = combineProps($others, $root);

	return <span {...$}>{locals.children}</span>;
};
