import type { ContentSize } from '../../../types';
import type { SkipLinkMixinAPI, SkipLinkMixinProps } from '../../mixins';
import type { LinkAPI, LinkProps } from '../Link';

export type SkipLinkProps = LinkProps &
    SkipLinkMixinProps & {
        size?: ContentSize;
    };

export type SkipLinkSize = 's' | 'm' | 'l';

export type SkipLinkAPI = {
    $root: LinkAPI['$root'] & SkipLinkMixinAPI['$root'];
};
