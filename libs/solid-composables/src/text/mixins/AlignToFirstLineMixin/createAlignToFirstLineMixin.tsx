import { computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './AlignToFirstLineMixin.module.scss';
import type { AlignToFirstLineMixinAPI, AlignToFirstLineMixinProps } from './types';

export const createAlignToFirstLineMixin = (
    props: AlignToFirstLineMixinProps,
): AlignToFirstLineMixinAPI => {
    const classList = createClassList(styles, () => ({
        [`AlignFirstLine`]: Boolean(props.aligned),
    }));
    const $root = computedProps({
        classList,
    });

    return {
        $root,
    };
};
