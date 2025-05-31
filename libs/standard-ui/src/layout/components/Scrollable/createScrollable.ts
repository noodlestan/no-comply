import { createScrollableMixin } from '@no-comply/solid-composables';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './Scrollable.module.scss';
import type { ScrollableAPI, ScrollableProps } from './types';

export const createScrollable = (props: ScrollableProps): ScrollableAPI => {
    const { $root: $scrollableMixinRoot } = createScrollableMixin(props);

    const $root = {
        classList: staticClassList(styles, 'Scrollable'),
    };

    return {
        $root: combineProps($scrollableMixinRoot, $root),
    };
};
