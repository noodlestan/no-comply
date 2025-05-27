import { staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './FirstLineAlignMixin.module.scss';
import type { FirstLineAlignMixinAPI } from './types';

export const createFirstLineAlignMixin = (): FirstLineAlignMixinAPI => {
    const $localRoot = {
        classList: staticClassList(styles, 'FirstLineAlign'),
    };

    return {
        $root: $localRoot,
    };
};
