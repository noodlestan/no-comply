import { createScrollableMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './Scrollable.module.scss';
import { $SCROLLABLE } from './constants';
import type { ScrollableAPI, ScrollableProps } from './types';

export const createScrollable = (props: ScrollableProps): ScrollableAPI => {
    const [locals, expose, compose] = createExposable($SCROLLABLE, props);

    const { $root: $scrollableMixinRoot } = compose(createScrollableMixin(locals));

    const $root = {
        classList: staticClassList(styles, 'Scrollable'),
    };

    return exposeAPI(expose, '$root', {
        $root: combineProps($scrollableMixinRoot, $root),
    });
};
