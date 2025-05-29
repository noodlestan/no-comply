import type { ClassList } from '@no-comply/solid-primitives';

import type { LinkMixinAPI } from '../Link';

export type SkipLinkMixinProps = {
    floating?: boolean;
};

export type SkipLinkMixinAPI = {
    $root: LinkMixinAPI['$root'] & {
        classList: ClassList;
    };
};
