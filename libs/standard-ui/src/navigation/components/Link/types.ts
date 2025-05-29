import {
    type FocusRingAPI,
    type LinkAPI as HeadlessLinkAPI,
    type LinkProps as HeadlessLinkProps,
    type LinkMixinAPI,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

export type LinkProps = HeadlessLinkProps;

export type LinkAPI = {
    $root: HeadlessLinkAPI['$root'] &
        FocusRingAPI['$root'] &
        LinkMixinAPI['$root'] & {
            classList: ClassList;
        };
};
