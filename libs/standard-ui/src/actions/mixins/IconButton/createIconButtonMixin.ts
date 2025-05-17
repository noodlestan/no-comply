import {
    createClassList,
    createComputedProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';

import styles from './IconButtonMixin.module.scss';
import type { IconButtonMixinAPI, IconButtonMixinProps } from './types';

export const createIconButtonMixin = (props: IconButtonMixinProps): IconButtonMixinAPI => {
    const $icon = {
        classList: staticClassList(styles, 'IconButton--Icon'),
    };

    const classList = createClassList(styles, () => ({
        IconButton: true,
        [`is-round`]: Boolean(props.round),
    }));

    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: $localRoot,
        $icon,
    };
};
