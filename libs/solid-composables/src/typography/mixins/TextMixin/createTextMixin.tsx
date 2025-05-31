import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';

import { createAlignedToFirstLineMixin } from '../AlignedToFirstLine';

import styles from './TextMixin.module.scss';
import type { TextMixinAPI, TextMixinProps } from './types';

export const createTextMixin = (props: TextMixinProps): TextMixinAPI => {
    const { $root: $alignedToFirstLine } = createAlignedToFirstLineMixin(props);

    const classList = createClassList(styles, () => ({
        Text: true,
        nowrap: Boolean(props.nowrap),
    }));
    const $root = computedProps({
        classList,
    });

    return {
        $root: combineProps($alignedToFirstLine, $root),
    };
};
