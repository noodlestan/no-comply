import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './ContentColorMixin.module.scss';
import { $CONTENT_COLOR_MIXIN } from './constants';
import type { ContentColorMixinAPI, ContentColorMixinProps } from './types';

const defaultProps: PickRequired<ContentColorMixinProps, 'color'> = {
    color: 'normal',
};

export const createContentColorMixin = (props: ContentColorMixinProps): ContentColorMixinAPI => {
    const [locals, expose] = createExposable($CONTENT_COLOR_MIXIN, props);

    const color = () => locals.color ?? defaultProps.color;
    const classList = createClassList(styles, () => ['ContentColor', `color-${color()}`]);

    const $root = computedProps({
        classList,
    });

    return exposeAPI(expose, '$root', {
        $root,
    });
};
