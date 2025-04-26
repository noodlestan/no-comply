import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    LinkAPI as HeadlessLinkAPI,
    LinkProps as HeadlessLinkProps,
    LinkMixinAPI,
} from '@noodlestan/headless-ui';

export type LinkProps = HeadlessLinkProps;

export type LinkAPI = {
    $root: HeadlessLinkAPI['$root'] &
        LinkMixinAPI['$root'] & {
            classList: ClassList;
        };
};
