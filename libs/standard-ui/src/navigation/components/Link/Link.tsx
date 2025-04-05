import type { ParentComponent } from 'solid-js';

import { createLink } from './createLink';
import type { LinkProps } from './types';

export const Link: ParentComponent<LinkProps> = props => {
    const { elProps } = createLink(props);
    return <a {...elProps}>{props.children}</a>;
};
