import { createClassList, createComputedProps } from '@noodlestan/context-ui-primitives';

import styles from './TextMixin.module.css';
import type { TextMixinAPI, TextMixinProps } from './types';

export const createTextMixin = (props: TextMixinProps): TextMixinAPI => {
    const classList = createClassList(styles, () => ({
        Text: true,
        [`Text-nowrap`]: Boolean(props.nowrap),
    }));

    const elProps = createComputedProps({ classList });

    return { elProps };
};
