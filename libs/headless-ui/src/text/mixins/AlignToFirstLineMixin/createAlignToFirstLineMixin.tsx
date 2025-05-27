import { createClassList, createComputedProps } from '@noodlestan/context-ui-primitives';

import styles from './AlignToFirstLineMixin.module.scss';
import type { AlignToFirstLineMixinAPI, AlignToFirstLineMixinProps } from './types';

export const createAlignToFirstLineMixin = (
    props: AlignToFirstLineMixinProps,
): AlignToFirstLineMixinAPI => {
    const classList = createClassList(styles, () => ({
        [`AlignFirstLine`]: Boolean(props.aligned),
    }));

    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: $localRoot,
    };
};
