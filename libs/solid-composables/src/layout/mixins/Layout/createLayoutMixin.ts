import { type PickProps, createClassList, createComputedProps } from '@no-comply/solid-primitives';

import { responsiveClassMap } from '../../../responsive';

import styles from './LayoutMixin.module.scss';
import type { LayoutMixinAPI, LayoutMixinProps } from './types';

type Defaults = Partial<PickProps<LayoutMixinProps, 'padding' | 'overflow'>>;

export function createLayoutMixin(
    props: LayoutMixinProps,
    defaults: Defaults = {},
    breakpoints: readonly string[] = [],
): LayoutMixinAPI {
    const classList = createClassList(styles, () => ({
        Layout: true,
        ...responsiveClassMap(breakpoints, 'padding', props.padding, defaults.padding),
        [`uncontained`]: Boolean(props.uncontained),
        [`stretch-${props.stretch}`]: Boolean(props.stretch),
        [`overflow-${props.overflow}`]: Boolean(props.overflow),
    }));
    const $localRoot = createComputedProps({ classList });

    return {
        $root: $localRoot,
    };
}
