import { createComputedProps, staticClassList } from '@noodlestan/context-ui-types';

import styles from './IconMixin.module.css';
import type { IconMixinAPI, IconMixinProps } from './types';

export const createIconMixin = (props: IconMixinProps): IconMixinAPI => {
    const staticProps = {
        component: 'span' as const,
        classList: staticClassList(styles, 'Icon'),
    };
    const elProps = createComputedProps(staticProps, {
        children: () => props.icon({}),
    });

    return {
        elProps,
    };
};
