import { createTextMixin as createHeadlessTextMixin } from '@no-comply/solid-composables';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import type { DisplayLevel, DisplayVariant } from '../../types';

import styles from './DisplayMixin.module.scss';
import type { DisplayMixinAPI, DisplayMixinProps } from './types';

const MAP_LEVEL_TO_VARIANT: Record<DisplayLevel, DisplayVariant> = {
    1: 'xl',
    2: 'l',
    3: 'm',
    4: 's',
    5: 'xs',
};

const defaultProps: PickRequired<DisplayMixinProps, 'level' | 'variant'> = {
    level: 3,
    variant: 'm',
};

export const createDisplayMixin = (props: DisplayMixinProps): DisplayMixinAPI => {
    const { $root: $textMixinRoot } = createHeadlessTextMixin(props);

    const level = () => props.level ?? defaultProps.level;
    const variant = () => props.variant ?? MAP_LEVEL_TO_VARIANT[level()];

    const classList = createClassList(styles, () => ['Display', `variant-${variant()}`]);
    const $root = computedProps({
        classList,
    });

    return {
        $root: combineProps($textMixinRoot, $root),
        level,
    };
};
