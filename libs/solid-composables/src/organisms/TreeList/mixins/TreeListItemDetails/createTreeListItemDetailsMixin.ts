import { staticClassList } from '@no-comply/solid-primitives';

import styles from './TreeListItemDetailsMixin.module.css';
import type { TreeListItemDetailsMixinAPI } from './types';

export const createTreeListItemDetailsMixin = (): TreeListItemDetailsMixinAPI => {
    const $localRoot = {
        classList: staticClassList(styles, 'TreeListItemDetails'),
    };

    const $focusable = {
        classList: staticClassList(styles, 'TreeListItemDetails--focusable'),
    };

    const $toggle = {
        classList: staticClassList(styles, 'TreeListItemDetails--toggle'),
    };

    const $contents = {
        classList: staticClassList(styles, 'TreeListItemDetails--contents'),
    };

    return {
        $root: $localRoot,
        $focusable,
        $toggle,
        $contents,
    };
};
