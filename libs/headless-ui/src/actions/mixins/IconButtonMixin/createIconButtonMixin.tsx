import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './IconButtonMixin.module.css';
import type { IconButtonMixinAPI, IconButtonMixinProps } from './types';

export const createIconButtonMixin = (props: IconButtonMixinProps): IconButtonMixinAPI => {
    const elProps = {
        classList: staticClassList(styles, 'IconButton'),
    };

    const iconStaticProps = {
        classList: staticClassList(styles, 'IconButton--icon'),
    };
    const iconProps = createComputedProps(iconStaticProps, {
        icon: () => props.icon,
    });

    return {
        elProps,
        iconProps,
    };
};
