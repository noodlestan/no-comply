import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { splitProps } from 'solid-js';

import { createActionMixin } from '../../../actions';
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
    const actionProps = createComputedProps(others, { variant, size });
    const { $root: $actionMixinRoot } = createActionMixin(actionProps);

    const classList = createClassList(styles, () => ({
        MenuItem: true,
        active: Boolean(props.active),
    }));
    const $localRoot = {
        classList,
    };

    return {
        $root: mergeProps($actionMixinRoot, $localRoot),
    };
};
