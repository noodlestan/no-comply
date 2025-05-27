import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';
import { createStaticMessage } from '@noodlestan/headless-ui';

import styles from './Callout.module.scss';
import type { CalloutAPI, CalloutProps } from './types';

const defaultProps: PickRequired<CalloutProps, 'size' | 'length'> = {
    size: 'normal',
    length: 'full',
};

export const createCallout = (props: CalloutProps): CalloutAPI => {
    const {
        $root: $staticMessageRoot,
        $title: $staticMessageTitle,
        $description: $staticMessageDescription,
        iconProps: staticMessageIconProps,
    } = createStaticMessage(props);

    const size = () => props.size ?? defaultProps.size;
    const length = () => props.length ?? defaultProps.length;
    const classList = createClassList(styles, () => [
        'Callout',
        `size-${size()}`,
        `length-${length()}`,
    ]);
    const $localRoot = createComputedProps({
        classList,
    });

    const $title = {
        classList: staticClassList(styles, 'Callout--Title'),
    };

    const iconStaticProps = {
        classList: staticClassList(styles, 'Callout--Icon'),
    };
    const iconProps = createComputedProps(iconStaticProps, {
        size,
    });

    const isSmall = () => props.size === 'small';

    const alignmentHeight = () => (isSmall() ? 'xs' : 's');
    const padding = () => (isSmall() ? 'xs' : 's');
    const gap = () => (isSmall() ? 's' : 'm');
    const titleVariant = () => (isSmall() ? 'xs' : 's');

    return {
        $root: mergeProps($staticMessageRoot, $localRoot),
        $title: mergeProps($staticMessageTitle, $title),
        $description: $staticMessageDescription,
        iconProps: mergeProps(staticMessageIconProps, iconProps),
        alignmentHeight,
        padding,
        gap,
        titleVariant,
        descriptionVariant: size,
        closeButtonSize: size,
    };
};
