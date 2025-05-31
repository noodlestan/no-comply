import { createDividerMixin as createHeadlessDividerMixin } from '@no-comply/solid-composables';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import type { DividerLength } from '../../types';

import styles from './DividerMixin.module.scss';
import type { DividerMixinAPI, DividerMixinProps } from './types';

const defaultProps: PickRequired<DividerMixinProps, 'variant' | 'length'> = {
    variant: 'base',
    length: 'full',
};

const makeStyle = (length: DividerLength | number) => {
    if (typeof length === 'number') {
        return { '--__divider-length': `${length}em` };
    }
    return {};
};

export const createDividerMixin = (props: DividerMixinProps): DividerMixinAPI => {
    const { $root: $dividerMixinRoot } = createHeadlessDividerMixin(props);

    const variant = () => props.variant ?? defaultProps.variant;
    const length = () => props.length ?? defaultProps.length;
    const style = () => makeStyle(length());
    const classList = createClassList(styles, () => [
        'Divider',
        `variant-${variant()}`,
        { [`length-${length()}`]: typeof length() !== 'number' },
    ]);
    const $root = computedProps({
        classList,
        style,
    });

    return {
        $root: combineProps($dividerMixinRoot, $root),
    };
};
