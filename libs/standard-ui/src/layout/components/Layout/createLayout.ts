import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createLayoutMixin } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import styles from './Layout.module.css';
import type { LayoutAPI, LayoutProps } from './types';

const defaultProps: PickRequired<LayoutProps, 'padding'> = {
    padding: 'none',
};

export const createLayout = (props: LayoutProps): LayoutAPI => {
    const [locals, others] = splitProps(props, ['padding', 'component']);

    const padding = () => locals.padding ?? defaultProps.padding;
    const classList = createClassList(styles, () => [`Layout-padding-${padding()}`]);

    const layoutProps = createComputedProps({ classList });

    const { elProps: layoutMixinElProps } = createLayoutMixin(others);
    return {
        elProps: mergeProps(others, layoutMixinElProps, layoutProps),
    };
};
