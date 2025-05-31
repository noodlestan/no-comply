import { computedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './FieldMixin.module.scss';
import type { FieldMixinApi } from './types';

export const createFieldMixin = (): FieldMixinApi => {
    const $static = {
        classList: staticClassList(styles, 'Field'),
    };
    const $root = computedProps($static, {});

    return {
        $root,
    };
};
