import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    ButtonAPI as HeadlessButtonAPI,
    ButtonProps as HeadlessButtonProps,
} from '@noodlestan/headless-ui';

import type { ButtonMixinAPI, ButtonMixinProps } from '../../mixins';

export type ButtonProps = HeadlessButtonProps & ButtonMixinProps;

export type ButtonAPI = {
    $root: ButtonMixinAPI['$root'] &
        HeadlessButtonAPI['$root'] & {
            classList: ClassList;
        };
};
