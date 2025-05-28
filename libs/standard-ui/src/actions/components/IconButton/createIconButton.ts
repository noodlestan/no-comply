import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { createIconAction } from '@noodlestan/headless-ui';

import { createIconButtonMixin } from '../../mixins';
import { createButton } from '../Button';

import type { IconButtonAPI, IconButtonProps } from './types';

export const createIconButton = (props: IconButtonProps): IconButtonAPI => {
    const { $root: $buttonRoot, size } = createButton(props);
    const { $root: $iconButtonRoot, iconProps } = createIconAction(props);

    const iconButttonProps = mergeProps(props, createComputedProps({ size }));
    const { $root: $iconButtonMixinRoot, iconProps: iconButtonMixinProps } =
        createIconButtonMixin(iconButttonProps);

    return {
        $root: mergeProps($buttonRoot, $iconButtonRoot, $iconButtonMixinRoot),
        iconProps: mergeProps(iconProps, iconButtonMixinProps),
    };
};
