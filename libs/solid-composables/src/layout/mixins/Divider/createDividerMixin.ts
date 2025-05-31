import { createAriaSeparator } from '@no-comply/solid-accessibility';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './DividerMixin.module.scss';
import type { DividerMixinAPI, DividerMixinProps } from './types';

export const createDividerMixin = (props: DividerMixinProps): DividerMixinAPI => {
    const { $root: $separatorRoot } = createAriaSeparator(props);
    const classList = staticClassList(styles, 'Divider');

    const $root = {
        classList,
        'data-separator': '' as const,
    };

    return {
        $root: combineProps($root, $separatorRoot),
    };
};
