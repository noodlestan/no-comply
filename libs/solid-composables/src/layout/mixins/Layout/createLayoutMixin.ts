import { computedProps, createClassList } from '@no-comply/solid-primitives';

import { responsiveClassMap } from '../../../responsive';

import styles from './LayoutMixin.module.scss';
import type { LayoutMixinAPI, LayoutMixinProps } from './types';

export function createLayoutMixin(
    props: LayoutMixinProps,
    breakpoints: readonly string[] = [],
): LayoutMixinAPI {
    const classList = createClassList(styles, () => ({
        Layout: true,
        ...responsiveClassMap(breakpoints, 'padding', props.padding),
        [`uncontained`]: Boolean(props.uncontained),
        [`stretch-${props.stretch}`]: Boolean(props.stretch),
        [`overflow-${props.overflow}`]: Boolean(props.overflow),
    }));
    const $root = computedProps({
        classList,
    });

    return {
        $root,
    };
}
