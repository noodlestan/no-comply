import type {
    FocusRingAPI,
    LinkAPI as HeadlessLinkAPI,
    LinkProps as HeadlessLinkProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';
import type { SkipLinkMixinAPI, SkipLinkMixinProps } from '../../mixins';

export type SkipLinkProps = HeadlessLinkProps &
    SkipLinkMixinProps & {
        size?: ContentSize;
    };

export type SkipLinkSize = 's' | 'm' | 'l';

export type SkipLinkAPI = {
    $root: HeadlessLinkAPI['$root'] &
        FocusRingAPI['$root'] &
        SkipLinkMixinAPI['$root'] & {
            classList: ClassList;
        };
};
