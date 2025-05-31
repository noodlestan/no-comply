import { computedProps, createClassList, mergeProps } from '@no-comply/solid-primitives';

import { createAlignToFirstLineMixin } from '../AlignToFirstLineMixin';

import styles from './TextMixin.module.scss';
import type { TextMixinAPI, TextMixinProps } from './types';

export const createTextMixin = (props: TextMixinProps): TextMixinAPI => {
    const { $root: $firstLineAlign } = createAlignToFirstLineMixin(props);

    const classList = createClassList(styles, () => ({
        Text: true,
        nowrap: Boolean(props.nowrap),
    }));
    const $root = computedProps({
        classList,
    });

    return {
        $root: mergeProps($firstLineAlign, $root),
    };
};
