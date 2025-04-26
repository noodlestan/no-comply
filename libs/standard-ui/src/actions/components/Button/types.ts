import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    ButtonMixinAPI,
    ButtonAPI as HeadlessButtonAPI,
    ButtonProps as HeadlessButtonProps,
} from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

//
export type ButtonProps = HeadlessButtonProps & {
    variant?: ButtonVariant;
    size?: ContentSize;
};

export type ButtonVariant = 'primary' | 'secondary' | 'plain' | 'danger' | 'transparent';

export type ButtonAPI = {
    $root: ButtonMixinAPI['$root'] &
        HeadlessButtonAPI['$root'] & {
            classList: ClassList;
        };
};
