import { staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './FieldLabelMixin.module.css';
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
