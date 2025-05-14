import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    NavLinkAPI as HeadlessNavLinkAPI,
    NavLinkProps as HeadlessNavLinkProps,
} from '@noodlestan/headless-ui';

import type { NavLinkMixinProps } from '../../mixins';
import type { LinkAPI, LinkProps } from '../Link';

export type NavLinkProps = LinkProps & HeadlessNavLinkProps & NavLinkMixinProps;

export type NavLinkAPI = {
    $root: LinkAPI['$root'] &
        HeadlessNavLinkAPI['$root'] & {
            classList: ClassList;
        };
};
