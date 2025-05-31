import { computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './AlignedToFirstLineMixin.module.scss';
import type { AlignedToFirstLineMixinAPI, AlignedToFirstLineMixinProps } from './types';

export const createAlignedToFirstLineMixin = (
    props: AlignedToFirstLineMixinProps,
): AlignedToFirstLineMixinAPI => {
    const classList = createClassList(styles, () => ({
        [`AlignedToFirstLine`]: Boolean(props.aligned),
    }));
    const $root = computedProps({
        classList,
    });

    return {
        $root,
    };
};
