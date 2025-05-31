import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './AlignFirstLineMixin.module.scss';
import { $ALIGN_FIRST_LINE_MIXIN } from './constants';
import type { AlignFirstLineMixinAPI } from './types';

export const createAlignFirstLineMixin = (): AlignFirstLineMixinAPI => {
    const [, expose] = createExposable($ALIGN_FIRST_LINE_MIXIN);

    const $root = {
        classList: staticClassList(styles, 'AlignFirstLine'),
    };

    return exposeAPI(expose, '$root', {
        $root,
    });
};
