import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    FocusRingAPI,
    LinkAPI as HeadlessLinkAPI,
    LinkProps as HeadlessLinkProps,
    NavLinkAPI as HeadlessNavLinkAPI,
    NavLinkProps as HeadlessNavLinkProps,
} from '@noodlestan/headless-ui';

import type { NavLinkMixinAPI, NavLinkMixinProps } from '../../mixins';

export type NavLinkProps = HeadlessLinkProps & HeadlessNavLinkProps & NavLinkMixinProps;

export type NavLinkAPI = {
    $root: HeadlessLinkAPI['$root'] &
        FocusRingAPI['$root'] &
        HeadlessNavLinkAPI['$root'] &
        NavLinkMixinAPI['$root'] & {
            classList: ClassList;
        };
};
