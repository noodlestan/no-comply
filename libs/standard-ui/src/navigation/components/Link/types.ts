import type { ClassList } from '@noodlestan/context-ui-primitives';
import {
    type FocusRingAPI,
    type LinkAPI as HeadlessLinkAPI,
    type LinkProps as HeadlessLinkProps,
    type LinkMixinAPI,
} from '@noodlestan/headless-ui';

export type LinkProps = HeadlessLinkProps;

export type LinkAPI = {
    $root: HeadlessLinkAPI['$root'] &
        FocusRingAPI['$root'] &
        LinkMixinAPI['$root'] & {
            classList: ClassList;
        };
};
