import { createAlignFirstLineMixin as createHeadlessAlignFirstLineMixin } from '@no-comply/solid-composables';
import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './AlignFirstLineMixin.module.scss';
import type { AlignFirstLineMixinAPI, AlignFirstLineMixinProps } from './types';

export const createAlignFirstLineMixin = (
    props: AlignFirstLineMixinProps,
): AlignFirstLineMixinAPI => {
    const { $root: $headlessAlignFirstLinenRoot } = createHeadlessAlignFirstLineMixin();

    const classList = createClassList(styles, () => [`size-${props.height}`]);
    const $root = computedProps({
        classList,
    });

    return {
        $root: combineProps($headlessAlignFirstLinenRoot, $root),
    };
};
