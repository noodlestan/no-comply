import { createIconAction } from '@no-comply/solid-composables';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createIconButtonMixin } from '../../mixins';
import { createButton } from '../Button';

import type { IconButtonAPI, IconButtonProps } from './types';

export const createIconButton = (props: IconButtonProps): IconButtonAPI => {
    const { $root: $buttonRoot, size } = createButton(props);
    const { $root: $iconButtonRoot, iconProps } = createIconAction(props);

    const iconButttonProps = combineProps(
        props,
        computedProps({
            size,
        }),
    );
    const { $root: $iconButtonMixinRoot, iconProps: iconButtonMixinProps } =
        createIconButtonMixin(iconButttonProps);

    return {
        $root: combineProps($buttonRoot, $iconButtonRoot, $iconButtonMixinRoot),
        iconProps: combineProps(iconProps, iconButtonMixinProps),
    };
};
