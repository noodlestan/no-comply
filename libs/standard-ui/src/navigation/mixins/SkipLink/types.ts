import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { LinkMixinAPI } from '../Link';

export type SkipLinkMixinProps = {
    floating?: boolean;
};

export type SkipLinkMixinAPI = {
    $root: LinkMixinAPI['$root'] & {
        classList: ClassList;
    };
};
