import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './FieldMixin.module.scss';
import { $FIED_MIXIN } from './constants';
import type { FieldMixinApi } from './types';

export const createFieldMixin = (): FieldMixinApi => {
    const [, expose] = createExposable($FIED_MIXIN);

    const $static = {
        classList: staticClassList(styles, 'Field'),
    };
    const $root = computedProps($static, {});

    return exposeAPI(expose, '$root', {
        $root,
    });
};
