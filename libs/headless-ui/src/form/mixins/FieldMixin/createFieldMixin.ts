import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './FieldMixin.module.css';
import type { FieldMixinApi } from './types';

export const createFieldMixin = (): FieldMixinApi => {
    const $static = {
        classList: staticClassList(styles, 'Field'),
    };
    const $localRoot = createComputedProps($static, {});

    return {
        $root: $localRoot,
    };
};
