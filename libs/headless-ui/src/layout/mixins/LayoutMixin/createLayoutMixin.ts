import { createClassList, createComputedProps } from '@noodlestan/context-ui-primitives';

import styles from './LayoutMixin.module.scss';
import type { LayoutMixinAPI, LayoutMixinProps } from './types';

export function createLayoutMixin(props: LayoutMixinProps): LayoutMixinAPI {
    const classList = createClassList(styles, () => ({
        Layout: true,
        [`uncontained`]: Boolean(props.uncontained),
        [`stretch-${props.stretch}`]: Boolean(props.stretch),
        [`overflow-${props.overflow}`]: Boolean(props.overflow),
    }));
    const $localRoot = createComputedProps({ classList });

    return {
        $root: $localRoot,
    };
}
