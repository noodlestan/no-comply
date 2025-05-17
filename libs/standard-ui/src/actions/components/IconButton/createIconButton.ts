import { mergeProps } from '@noodlestan/context-ui-primitives';
import { createIconAction } from '@noodlestan/headless-ui';

import { createIconButtonMixin } from '../../mixins';
import { createButton } from '../Button';

import type { IconButtonAPI, IconButtonProps } from './types';

export const createIconButton = (props: IconButtonProps): IconButtonAPI => {
    const { $root: $buttonRoot } = createButton(props);
    const { $root: $iconButtonRoot, iconProps } = createIconAction(props);
    const { $root: $iconButtonMixinRoot, $icon: $iconButtonMixinIcon } =
        createIconButtonMixin(props);

    return {
        $root: mergeProps($buttonRoot, $iconButtonRoot, $iconButtonMixinRoot),
        iconProps: mergeProps(iconProps, $iconButtonMixinIcon),
    };
};
