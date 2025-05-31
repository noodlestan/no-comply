import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList } from '@no-comply/solid-primitives';

import { responsiveClassMap } from '../../../responsive';

import styles from './LayoutMixin.module.scss';
import { $LAYOUT_MIXIN } from './constants';
import type { LayoutMixinAPI, LayoutMixinProps } from './types';

export function createLayoutMixin(
    props: LayoutMixinProps,
    breakpoints: readonly string[] = [],
): LayoutMixinAPI {
    const [locals, expose] = createExposable($LAYOUT_MIXIN, props);

    const classList = createClassList(styles, () => ({
        Layout: true,
        ...responsiveClassMap(breakpoints, 'padding', locals.padding),
        [`uncontained`]: Boolean(locals.uncontained),
        [`stretch-${locals.stretch}`]: Boolean(locals.stretch),
        [`overflow-${locals.overflow}`]: Boolean(locals.overflow),
    }));

    const $root = computedProps({
        classList,
    });

    return exposeAPI(expose, '$root', {
        $root,
    });
}
