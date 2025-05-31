import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './ListMixin.module.scss';
import { $LIST_MIXIN } from './constants';
import type { ListMixinAPI } from './types';

export const createListixin = (): ListMixinAPI => {
    const [, expose] = createExposable($LIST_MIXIN);

    const $root = {
        classList: staticClassList(styles, 'List'),
    };

    return exposeAPI(expose, '$root', {
        $root,
    });
};
