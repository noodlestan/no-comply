import {
    type PickRequired,
    createClassList,
    createComputedProps,
} from '@no-comply/solid-primitives';

import styles from './ContentColorMixin.module.scss';
import type { ContentColorMixinAPI, ContentColorMixinProps } from './types';

const defaultProps: PickRequired<ContentColorMixinProps, 'color'> = {
    color: 'normal',
};

export const createContentColorMixin = (props: ContentColorMixinProps): ContentColorMixinAPI => {
    const color = () => props.color ?? defaultProps.color;
    const classList = createClassList(styles, () => ['ContentColor', `color-${color()}`]);

    const elProps = createComputedProps({ classList });

    return {
        elProps,
    };
};
