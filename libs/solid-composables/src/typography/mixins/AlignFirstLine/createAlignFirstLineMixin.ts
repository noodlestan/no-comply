import { staticClassList } from '@no-comply/solid-primitives';

import styles from './AlignFirstLineMixin.module.scss';
import type { AlignFirstLineMixinAPI } from './types';

export const createAlignFirstLineMixin = (): AlignFirstLineMixinAPI => {
    const $root = {
        classList: staticClassList(styles, 'AlignFirstLine'),
    };

    return {
        $root,
    };
};
