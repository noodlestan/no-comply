import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './FieldLabelMixin.module.scss';
import { $FIED_LABEL_MIXIN } from './constants';
import type { FieldLabelMixinAPI } from './types';

export const createFieldLabelMixin = (): FieldLabelMixinAPI => {
    const [, expose] = createExposable($FIED_LABEL_MIXIN);

    const classList = staticClassList(styles, 'FieldLabel');

    const $root = {
        classList,
    };

    return exposeAPI(expose, '$root', {
        $root,
    });
};
