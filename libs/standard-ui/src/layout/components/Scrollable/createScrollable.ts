import { createScrollableMixin } from '@no-comply/solid-composables';
import { mergeProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './Scrollable.module.css';
import type { ScrollableAPI, ScrollableProps } from './types';

export const createScrollable = (props: ScrollableProps): ScrollableAPI => {
    const { $root: $scrollableMixinRoot } = createScrollableMixin(props);

    const $localRoot = {
        classList: staticClassList(styles, 'Scrollable'),
    };

    return {
        $root: mergeProps($scrollableMixinRoot, $localRoot),
    };
};
