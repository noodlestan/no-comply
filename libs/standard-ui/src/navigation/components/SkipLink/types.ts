import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { ContentSize } from '../../../types';
import type { LinkAPI, LinkProps } from '../Link';

export type SkipLinkProps = LinkProps & {
    size?: ContentSize;
};

export type SkipLinkSize = 's' | 'm' | 'l';

export type SkipLinkAPI = {
    $root: LinkAPI['$root'] & {
        classList: ClassList;
    };
};
