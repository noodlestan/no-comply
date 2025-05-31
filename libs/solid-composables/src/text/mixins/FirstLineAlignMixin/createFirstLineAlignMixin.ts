import { staticClassList } from '@no-comply/solid-primitives';

import styles from './FirstLineAlignMixin.module.scss';
import type { FirstLineAlignMixinAPI } from './types';

export const createFirstLineAlignMixin = (): FirstLineAlignMixinAPI => {
    const $root = {
        classList: staticClassList(styles, 'FirstLineAlign'),
    };

    return {
        $root,
    };
};
