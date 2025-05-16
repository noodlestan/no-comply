import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    FocusRingAPI,
    ButtonAPI as HeadlessButtonAPI,
    ButtonProps as HeadlessButtonProps,
} from '@noodlestan/headless-ui';

import type { ButtonMixinAPI, ButtonMixinProps } from '../../mixins';

export type ButtonProps = HeadlessButtonProps & ButtonMixinProps;

export type ButtonAPI = {
    $root: HeadlessButtonAPI['$root'] &
        FocusRingAPI['$root'] &
        ButtonMixinAPI['$root'] & {
            classList: ClassList;
        };
};
