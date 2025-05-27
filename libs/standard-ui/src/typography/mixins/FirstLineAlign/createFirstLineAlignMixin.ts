import {
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createFirstLineAlignMixin as createHeadlessFirstLineAlignMixin } from '@noodlestan/headless-ui';

import styles from './FirstLineAlignMixin.module.scss';
import type { FirstLineAlignMixinAPI, FirstLineAlignMixinProps } from './types';

export const createFirstLineAlignMixin = (
    props: FirstLineAlignMixinProps,
): FirstLineAlignMixinAPI => {
    const { $root: $headlessFirstLineAlignRoot } = createHeadlessFirstLineAlignMixin();

    const classList = createClassList(styles, () => [`size-${props.height}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($headlessFirstLineAlignRoot, $localRoot),
    };
};
