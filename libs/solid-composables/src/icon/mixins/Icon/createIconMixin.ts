import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createAlignedToFirstLineMixin } from '../../../typography';

import styles from './IconMixin.module.scss';
import { $ICON_MIXIN } from './constants';
import type { IconMixinAPI, IconMixinProps } from './types';

export const createIconMixin = (props: IconMixinProps): IconMixinAPI => {
    const [locals, expose, compose] = createExposable($ICON_MIXIN, props);

    const { $root: $alignedToFirstLineRoot } = compose(createAlignedToFirstLineMixin(locals));

    const $root = {
        classList: staticClassList(styles, 'Icon'),
    };

    return exposeAPI(expose, '$root', {
        $root: combineProps($alignedToFirstLineRoot, $root),
    });
};
