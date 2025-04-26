import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    IconButtonAPI as HeadlessIconButtonAPI,
    IconButtonProps as HeadlessIconButtonProps,
    IconButtonMixinAPI,
} from '@noodlestan/headless-ui';

import type { ButtonAPI, ButtonProps } from '../Button';

export type IconButtonProps = ButtonProps &
    HeadlessIconButtonProps & {
        rounded?: boolean;
    };

export type IconButtonAPI = {
    $root: ButtonAPI['$root'] &
        HeadlessIconButtonAPI['$root'] &
        IconButtonMixinAPI['$root'] & {
            classList: ClassList;
        };
    iconProps: HeadlessIconButtonAPI['iconProps'] & IconButtonMixinAPI['$icon'];
};
