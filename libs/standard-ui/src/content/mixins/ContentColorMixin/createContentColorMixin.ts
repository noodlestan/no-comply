import {
    type PickRequired,
    createClassList,
    createComputedProps,
} from '@noodlestan/context-ui-primitives';

import styles from './ContentColorMixin.module.css';
import type { ContentColorMixinAPI, ContentColorMixinProps } from './types';

const defaultProps: PickRequired<ContentColorMixinProps, 'color'> = {
    color: 'normal',
};

export const createContentColorMixin = (props: ContentColorMixinProps): ContentColorMixinAPI => {
    const color = () => props.color ?? defaultProps.color;
    const classList = createClassList(styles, () => [
        'ContentColor',
        `ContentColor-color-${color()}`,
    ]);

    const elProps = createComputedProps({ classList });

    return {
        elProps,
    };
};
