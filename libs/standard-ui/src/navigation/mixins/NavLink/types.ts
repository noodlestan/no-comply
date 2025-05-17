import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { ContentSize } from '../../../types';
import type { LinkMixinAPI } from '../Link';

export type NavLinkMixinProps = {
    layout?: NavLinkLayout;
    size?: ContentSize;
    nowrap?: boolean;
    highlight?: NavLinkHighlight;
};

type NavLinkLayout = 'h' | 'v';
type NavLinkHighlight = 'before' | 'after';

export type NavLinkMixinAPI = {
    $root: LinkMixinAPI['$root'] & {
        classList: ClassList;
    };
};
