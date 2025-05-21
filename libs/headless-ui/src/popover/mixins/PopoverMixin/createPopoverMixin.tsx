import { staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './Popover.module.scss';
import type { PopoverMixinAPI } from './types';

export const createPopoverMixin = (): PopoverMixinAPI => {
    const $root = {
        classList: staticClassList(styles, 'Popover'),
    };

    return {
        $root,
    };
};
