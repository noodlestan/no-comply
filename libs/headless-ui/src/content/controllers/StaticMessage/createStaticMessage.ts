import {
    type PickRequired,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { AlertTriangleIcon, InfoIcon, ThumbsUpIcon, XCircleIcon } from 'lucide-solid';
import { type Component, splitProps } from 'solid-js';

import { createContentMessage } from '../ContentMessage';

import type { StaticMessageAPI, StaticMessageProps, StaticMessageVariant } from './types';

const VARIANT_ICON_MAP: Record<StaticMessageVariant, Component> = {
    passive: InfoIcon,
    info: InfoIcon,
    warning: AlertTriangleIcon,
    danger: XCircleIcon,
    success: ThumbsUpIcon,
};

const defaultProps: PickRequired<StaticMessageProps, 'variant'> = {
    variant: 'passive',
};

export const createStaticMessage = (props: StaticMessageProps): StaticMessageAPI => {
    const variant = () => props.variant ?? defaultProps.variant;
    const icon = () => VARIANT_ICON_MAP[variant()];

    const contentMessageProps = createComputedProps({ variant, icon });
    const { $root, ...rest } = createContentMessage(mergeProps(props, contentMessageProps));

    const [, $rootOthers] = splitProps($root, ['data-message', 'role']);

    const $static = {
        role: 'note' as const,
    };
    const $localRoot = createComputedProps($static, {
        'data-message': variant,
    });

    return {
        ...rest,
        $root: mergeProps($rootOthers, $localRoot),
    };
};
