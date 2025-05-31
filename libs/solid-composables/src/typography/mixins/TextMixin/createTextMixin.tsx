import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, createClassList } from '@no-comply/solid-primitives';

import { createAlignedToFirstLineMixin } from '../AlignedToFirstLine';

import styles from './TextMixin.module.scss';
import { $TEXT_MIXIN } from './constants';
import type { TextMixinAPI, TextMixinProps } from './types';

export const createTextMixin = (props: TextMixinProps): TextMixinAPI => {
    const [locals, expose, compose] = createExposable($TEXT_MIXIN, props);

    const { $root: $alignedToFirstLine } = compose(createAlignedToFirstLineMixin(locals));

    const classList = createClassList(styles, () => ({
        Text: true,
        nowrap: Boolean(locals.nowrap),
    }));

    const $root = computedProps({
        classList,
    });

    return exposeAPI(expose, '$root', {
        $root: combineProps($alignedToFirstLine, $root),
    });
};
