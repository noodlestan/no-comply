import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    NavLinkAPI as HeadlessNavLinkAPI,
    NavLinkProps as HeadlessNavLinkProps,
} from '@noodlestan/headless-ui';

import type { LinkAPI, LinkProps } from '../Link';

export type NavLinkProps = LinkProps &
    HeadlessNavLinkProps & {
        size?: NavLinkSize;
    };

export type NavLinkSize = 's' | 'm' | 'l';

export type NavLinkAPI = {
    $root: LinkAPI['$root'] &
        HeadlessNavLinkAPI['$root'] & {
            classList: ClassList;
        };
};
