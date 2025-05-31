import { createDividerMixin as createHeadlessDividerMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import type { DividerLength } from '../../types';

import styles from './DividerMixin.module.scss';
import { $DIVIDER_MIXIN } from './constants';
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
    const [locals, expose, compose] = createExposable($DIVIDER_MIXIN, props);

    const { $root: $dividerMixinRoot } = compose(createHeadlessDividerMixin(locals));

    const variant = () => locals.variant ?? defaultProps.variant;
    const length = () => locals.length ?? defaultProps.length;
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

    return exposeAPI(expose, '$root', {
        $root: combineProps($dividerMixinRoot, $root),
    });
};
