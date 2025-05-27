import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    IconAPI as HeadlessIconAPI,
    IconProps as HeadlessIconProps,
    IconMixinAPI,
    IconMixinProps,
} from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

export type IconProps = HeadlessIconProps &
    IconMixinProps & {
        size?: ContentSize;
    };

export type IconAPI = {
    $root: HeadlessIconAPI['$root'] &
        IconMixinAPI['$root'] & {
            classList: ClassList;
        };
};
