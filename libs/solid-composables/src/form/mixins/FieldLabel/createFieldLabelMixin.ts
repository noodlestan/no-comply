import { staticClassList } from '@no-comply/solid-primitives';

import styles from './FieldLabelMixin.module.scss';
import type { FieldLabelMixinAPI } from './types';

export const createFieldLabelMixin = (): FieldLabelMixinAPI => {
    const classList = staticClassList(styles, 'FieldLabel');

    const $localRoot = {
        classList,
    };

    return {
        $root: $localRoot,
    };
};
