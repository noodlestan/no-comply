import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-types';
import { createStaticMessage } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import styles from './Callout.module.css';
import type { CalloutAPI, CalloutProps } from './types';

const defaultProps: PickRequired<CalloutProps, 'size' | 'length'> = {
    size: 'm',
    length: 'full',
};

export const createCallout = (props: CalloutProps): CalloutAPI => {
    const [locals, others] = splitProps(props, ['size', 'length']);

    const { elProps, labelProps, iconProps } = createStaticMessage(others);

    const size = () => locals.size ?? defaultProps.size;
    const length = () => locals.length ?? defaultProps.length;

    const classList = createClassList(styles, () => [
        'Callout',
        `Callout-size-${size()}`,
        `Callout-length-${length()}`,
    ]);

    const localProps = createComputedProps({ classList });
    const iconLocalProps = createComputedProps({ size });

    return {
        elProps: mergeProps(others, elProps, localProps),
        labelProps,
        iconProps: mergeProps(iconProps, iconLocalProps),
    };
};
