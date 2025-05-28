import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { IconActionAPI, IconActionProps } from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';
import type { IconButtonMixinAPI, IconButtonMixinProps } from '../../mixins';
import type { ButtonAPI, ButtonProps } from '../Button';

export type IconButtonProps = ButtonProps &
    IconActionProps &
    Omit<IconButtonMixinProps, 'size'> & {
        size?: ContentSize;
    };

export type IconButtonAPI = {
    $root: ButtonAPI['$root'] &
        IconActionAPI['$root'] &
        IconButtonMixinAPI['$root'] & {
            classList: ClassList;
        };
    iconProps: IconActionAPI['iconProps'] & IconButtonMixinAPI['iconProps'];
};
