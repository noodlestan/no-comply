import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createFlexMixin, createLayoutMixin } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import styles from './Flex.module.css';
import type { FlexAPI, FlexProps } from './types';

const defaultProps: PickRequired<FlexProps, 'component' | 'padding' | 'gap'> = {
    component: 'div',
    gap: 'none',
    padding: 'none',
};

export const createFlex = (props: FlexProps): FlexAPI => {
    const [locals, others] = splitProps(props, ['component', 'padding', 'gap']);

    const component = () => locals.component ?? defaultProps.component;

    const gap = () => locals.gap ?? defaultProps.gap;
    const padding = () => locals.padding ?? defaultProps.padding;
    const classList = createClassList(styles, () => [
        `Flex-padding-${padding()}`,
        `Flex-gap-${gap()}`,
    ]);

    const flexProps = createComputedProps({ classList, component });

    const { elProps: layoutMixinElProps } = createLayoutMixin(others);
    const { elProps: flexMixinElProps } = createFlexMixin(others);
    return {
        elProps: mergeProps(layoutMixinElProps, flexMixinElProps, flexProps),
    };
};
