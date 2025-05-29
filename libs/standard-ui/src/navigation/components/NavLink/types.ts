import type {
    FocusRingAPI,
    LinkAPI as HeadlessLinkAPI,
    LinkProps as HeadlessLinkProps,
    NavLinkAPI as HeadlessNavLinkAPI,
    NavLinkProps as HeadlessNavLinkProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

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
