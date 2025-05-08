import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
    staticClassList,
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
        $label: $staticessageLabel,
        iconProps: staticMessageIconProps,
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

    const iconStaticProps = {
        classList: staticClassList(styles, 'Callout--Icon'),
    };
    const iconProps = createComputedProps(iconStaticProps, {
        size,
    });

    const $label = {
        classList: staticClassList(styles, 'Callout--Label'),
    };

    return {
        $root: mergeProps($staticMessageRoot, $localRoot),
        $label: mergeProps($staticessageLabel, $label),
        iconProps: mergeProps(staticMessageIconProps, iconProps),
    };
};
