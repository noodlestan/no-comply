import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createIconMixin } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import styles from './Icon.module.css';
import type { IconAPI, IconProps } from './types';

const defaultProps: PickRequired<IconProps, 'size'> = {
    size: 's',
};

export const createIcon = (props: IconProps): IconAPI => {
    const [locals, others] = splitProps(props, ['size']);

    const size = () => locals.size ?? defaultProps.size;

    const classList = createClassList(styles, () => [`Icon-size-${size()}`]);

    const iconProps = createComputedProps({ classList });

    const { elProps: iconMixinElProps } = createIconMixin(others);
    return {
        elProps: mergeProps(others, iconMixinElProps, iconProps),
    };
};
