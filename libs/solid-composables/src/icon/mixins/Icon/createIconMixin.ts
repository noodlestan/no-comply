import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createAlignedToFirstLineMixin } from '../../../typography';

import styles from './IconMixin.module.scss';
import type { IconMixinAPI, IconMixinProps } from './types';

export const createIconMixin = (props: IconMixinProps): IconMixinAPI => {
    const { $root: $alignedToFirstLineRoot } = createAlignedToFirstLineMixin(props);

    const $root = {
        classList: staticClassList(styles, 'Icon'),
    };

    return {
        $root: combineProps($alignedToFirstLineRoot, $root),
    };
};
