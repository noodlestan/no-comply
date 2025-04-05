import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-types';
import { createDividerMixin } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import styles from './Divider.module.css';
import type { DividerAPI, DividerLength, DividerProps } from './types';

const defaultProps: PickRequired<DividerProps, 'variant' | 'length'> = {
    variant: 'base',
    length: 'full',
};

const makeStyle = (length: DividerLength | number) => {
    if (typeof length === 'number') {
        return { '--divider-length': `${length}em` };
    }
    return {};
};

export const createDivider = (props: DividerProps): DividerAPI => {
    const [locals, others] = splitProps(props, ['variant', 'length']);

    const variant = () => locals.variant ?? defaultProps.variant;
    const length = () => locals.length ?? defaultProps.length;
    const style = () => makeStyle(length());

    const classList = createClassList(styles, () => [
        'Divider',
        `Divider-variant-${variant()}`,
        `Divider-length-${length()}`,
    ]);

    const dividerProps = createComputedProps({ classList, style });

    const { elProps: dividerMixinElProps } = createDividerMixin(others);
    return {
        elProps: mergeProps(others, dividerMixinElProps, dividerProps),
    };
};
