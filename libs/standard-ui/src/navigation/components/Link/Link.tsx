import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { LINK_PROPS } from './constants';
import { createLink } from './createLink';
import type { LinkProps } from './types';

type Props = ClosedTagProps & LinkProps;

export const Link: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, LINK_PROPS);

    const { $root } = createLink(locals);
    const $ = mergeProps($others, $root);

    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...$} />;
};
