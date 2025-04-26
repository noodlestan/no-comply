import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createDividerMixin } from '@noodlestan/headless-ui';

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
    const { $root: $dividerMixinRoot } = createDividerMixin(props);

    const variant = () => props.variant ?? defaultProps.variant;
    const length = () => props.length ?? defaultProps.length;
    const style = () => makeStyle(length());
    const classList = createClassList(styles, () => [
        'Divider',
        `Divider-variant-${variant()}`,
        `Divider-length-${length()}`,
    ]);
    const $localRoot = createComputedProps({ classList, style });

    return {
        $root: mergeProps($dividerMixinRoot, $localRoot),
    };
};
