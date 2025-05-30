import { staticClassList } from '@no-comply/solid-primitives';

import styles from './PopoverMixin.module.scss';
import type { PopoverMixinAPI } from './types';

export const createPopoverMixin = (): PopoverMixinAPI => {
    const $root = {
        classList: staticClassList(styles, 'Popover'),
    };

    return {
        $root,
    };
};
