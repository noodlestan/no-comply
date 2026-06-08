import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { LINK_PROPS } from './constants';
import { createLink } from './createLink';
import type { LinkProps } from './types';

type Props = ClosedTagProps & LinkProps;

export const Link: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, LINK_PROPS);

	const { $root } = createLink(locals);
	const $ = combineProps($others, $root);

	// eslint-disable-next-line jsx-a11y/anchor-has-content
	return <a {...$} />;
};
