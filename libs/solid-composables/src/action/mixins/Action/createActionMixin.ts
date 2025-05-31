import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './ActionMixin.module.scss';
import { $ACTION_MIXIN } from './constants';
import type { ActionMixinAPI } from './types';

export const createActionMixin = (): ActionMixinAPI => {
    const [, expose] = createExposable($ACTION_MIXIN);

    const $static = {
        classList: staticClassList(styles, 'Action'),
    };
    const $root = computedProps($static, {});

    return exposeAPI(expose, '$root', {
        $root,
    });
};
