import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createStaticMessage } from '@noodlestan/headless-ui';

import styles from './Callout.module.css';
import type { CalloutAPI, CalloutProps } from './types';

const defaultProps: PickRequired<CalloutProps, 'size' | 'length'> = {
    size: 'normal',
    length: 'full',
};

export const createCallout = (props: CalloutProps): CalloutAPI => {
    const messageProps = mergeProps(props, { labelled: true });
    const {
        $root: $staticMessageRoot,
        $label,
        $icon: $staticMessageIcon,
    } = createStaticMessage(messageProps);

    const size = () => props.size ?? defaultProps.size;
    const length = () => props.length ?? defaultProps.length;
    const classList = createClassList(styles, () => [
        'Callout',
        `Callout-size-${size()}`,
        `Callout-length-${length()}`,
    ]);
    const $localRoot = createComputedProps({
        classList,
    });

    const $icon = createComputedProps({
        size,
    });

    return {
        $root: mergeProps($staticMessageRoot, $localRoot),
        $label,
        $icon: mergeProps($staticMessageIcon, $icon),
    };
};
