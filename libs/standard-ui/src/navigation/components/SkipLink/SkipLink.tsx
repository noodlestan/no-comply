import { mergeProps } from '@noodlestan/context-ui-primitives';
import type { ClosedTagProps } from '@noodlestan/headless-ui';
import { ArrowDownIcon } from 'lucide-solid';
import { type ParentComponent, splitProps } from 'solid-js';

import { Icon } from '../../../icon';

import { SKIP_LINK_PROPS } from './constants';
import { createSkipLink } from './createSkipLink';
import type { SkipLinkProps } from './types';

type Props = ClosedTagProps & SkipLinkProps;

export const SkipLink: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, [...SKIP_LINK_PROPS, 'children']);

    const { $root } = createSkipLink(locals);
    const $ = mergeProps($others, $root);

    return (
        <a {...$}>
            <Icon size={locals.size} icon={ArrowDownIcon} />
            {locals.children}
        </a>
    );
};
