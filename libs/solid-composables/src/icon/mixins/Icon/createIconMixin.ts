import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createAlignToFirstLineMixin } from '../../../text';

import styles from './IconMixin.module.scss';
import type { IconMixinAPI, IconMixinProps } from './types';

export const createIconMixin = (props: IconMixinProps): IconMixinAPI => {
    const { $root: $alignToFirstLineRoot } = createAlignToFirstLineMixin(props);

    const $root = {
        classList: staticClassList(styles, 'Icon'),
    };

    return {
        $root: combineProps($alignToFirstLineRoot, $root),
    };
};
