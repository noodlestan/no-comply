import {
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import {
    createIconButton as createHeadlessIconButton,
    createIconButtonMixin,
} from '@noodlestan/headless-ui';

import { createButton } from '../Button';

import styles from './IconButton.module.css';
import type { IconButtonAPI, IconButtonProps } from './types';

export const createIconButton = (props: IconButtonProps): IconButtonAPI => {
    const { $root: $buttonRoot } = createButton(props);
    const { $root: $iconButtonRoot, iconProps } = createHeadlessIconButton(props);
    const { $root: $iconButtonMixinRoot, $icon: $iconButtonMixinIcon } = createIconButtonMixin();

    const classList = createClassList(styles, () => ({
        IconButton: true,
        [`IconButton-is-rounded`]: Boolean(props.rounded),
    }));
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($buttonRoot, $iconButtonRoot, $iconButtonMixinRoot, $localRoot),
        iconProps: mergeProps(iconProps, $iconButtonMixinIcon),
    };
};
