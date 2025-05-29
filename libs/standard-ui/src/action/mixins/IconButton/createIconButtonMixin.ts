import { createClassList, createComputedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './IconButtonMixin.module.scss';
import { ICON_BUTTOM_MAP_SIZE_TO_ICON_SIZE } from './constants';
import type { IconButtonMixinAPI, IconButtonMixinProps } from './types';

export const createIconButtonMixin = (props: IconButtonMixinProps): IconButtonMixinAPI => {
    const iconStaticProps = {
        classList: staticClassList(styles, 'IconButton--Icon'),
    };
    const iconProps = createComputedProps(iconStaticProps, {
        size: () => ICON_BUTTOM_MAP_SIZE_TO_ICON_SIZE[props.size],
    });

    const classList = createClassList(styles, () => ({
        IconButton: true,
        [`is-round`]: Boolean(props.round),
        [`is-small`]: Boolean(props.size === 'small'),
    }));

    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: $localRoot,
        iconProps,
    };
};
