import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';

import { createAlignToFirstLineMixin } from '../../../text';

import styles from './IconMixin.module.css';
import type { IconMixinAPI, IconMixinProps } from './types';

export const createIconMixin = (props: IconMixinProps): IconMixinAPI => {
    const { $root: $alignToFirstLineRoot } = createAlignToFirstLineMixin(props);

    const $localRoot = {
        classList: staticClassList(styles, 'Icon'),
    };

    return {
        $root: mergeProps($alignToFirstLineRoot, $localRoot),
    };
};
