import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-types';
import { createFlexMixin } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import { createLayout } from '../Layout';

import styles from './Flex.module.css';
import type { FlexAPI, FlexProps } from './types';

const defaultProps: PickRequired<FlexProps, 'gap'> = {
    gap: 'none',
};

export const createFlex = (props: FlexProps): FlexAPI => {
    const [locals, others] = splitProps(props, ['gap']);

    const gap = () => locals.gap ?? defaultProps.gap;
    const classList = createClassList(styles, () => [`Flex-gap-${gap()}`]);

    const flexProps = createComputedProps({ classList });

    const { elProps: layoutElProps } = createLayout(others);
    const { elProps: flexMixinElProps } = createFlexMixin(others);
    return {
        elProps: mergeProps(layoutElProps, flexMixinElProps, flexProps),
    };
};
