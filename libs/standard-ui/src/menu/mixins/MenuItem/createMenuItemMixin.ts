import {
    type PickRequired,
    createComputedProps,
    mergeProps,
    staticClassList,
} from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { createActionMixin } from '../../../action';
import type { ContentSize } from '../../../types';

import styles from './MenuItemMixin.module.scss';
import type { MenuItemMixinAPI, MenuItemMixinProps } from './types';

const defaultProps: PickRequired<MenuItemMixinProps, 'variant'> = {
    variant: 'plain',
};

export const createMenuItemMixin = (props: MenuItemMixinProps): MenuItemMixinAPI => {
    const [, others] = splitProps(props, ['variant']);
    const variant = () => props.variant ?? defaultProps.variant;
    const size = () => 'normal' as ContentSize;
    const actionProps = createComputedProps(others, { variant, size, inset: () => true });
    const { $root: $actionMixinRoot } = createActionMixin(actionProps);

    const $localRoot = {
        classList: staticClassList(styles, 'MenuItem'),
    };

    const $iconSlot = {
        classList: staticClassList(styles, '-Icon'),
    };

    const $labelSlot = {
        classList: staticClassList(styles, '-Label'),
    };

    const $subLabelSlot = {
        classList: staticClassList(styles, '-LabelSub'),
    };

    const $descriptionSlot = {
        classList: staticClassList(styles, '-Description'),
    };

    const $expandSlot = {
        classList: staticClassList(styles, '-Expand'),
    };

    return {
        $root: mergeProps($actionMixinRoot, $localRoot),
        $iconSlot,
        $expandSlot,
        $labelSlot,
        $subLabelSlot,
        $descriptionSlot,
    };
};
