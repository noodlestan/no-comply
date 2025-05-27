import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createTextMixin as createHeadlessTextMixin } from '@noodlestan/headless-ui';

import styles from './DisplayMixin.module.scss';
import type {
    DisplayMixinAPI,
    DisplayMixinLevel,
    DisplayMixinProps,
    DisplayMixinVariant,
} from './types';

const MAP_LEVEL_TO_VARIANT: Record<DisplayMixinLevel, DisplayMixinVariant> = {
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
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($textMixinRoot, $localRoot),
        level,
    };
};
