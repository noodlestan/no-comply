import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createLayoutMixin } from '@noodlestan/headless-ui';

import styles from './Layout.module.css';
import { type LayoutAPI, type LayoutProps } from './types';

const defaultProps: PickRequired<LayoutProps, 'padding'> = {
    padding: 'none',
};

export const createLayout = (props: LayoutProps): LayoutAPI => {
    const { $root: $layoutMixinRoot } = createLayoutMixin(props);

    const padding = () => props.padding ?? defaultProps.padding;
    const classList = createClassList(styles, () => [`Layout-padding-${padding()}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($layoutMixinRoot, $localRoot),
    };
};
