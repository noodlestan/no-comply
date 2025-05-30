import { createDividerMixin } from '@no-comply/solid-composables';
import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@no-comply/solid-primitives';

import styles from './Divider.module.scss';
import type { DividerAPI, DividerLength, DividerProps } from './types';

const defaultProps: PickRequired<DividerProps, 'variant' | 'length'> = {
    variant: 'base',
    length: 'full',
};

const makeStyle = (length: DividerLength | number) => {
    if (typeof length === 'number') {
        return { '--__divider-length': `${length}em` };
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
        `variant-${variant()}`,
        { [`length-${length()}`]: typeof length() !== 'number' },
    ]);
    const $localRoot = createComputedProps({ classList, style });

    return {
        $root: mergeProps($dividerMixinRoot, $localRoot),
    };
};
