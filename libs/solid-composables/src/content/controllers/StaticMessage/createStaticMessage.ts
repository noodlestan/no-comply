import { type PickRequired, computedProps, mergeProps } from '@no-comply/solid-primitives';
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

    const contentMessageProps = computedProps({
        variant,
        icon,
    });
    const { $root: $contentMessageRoot, ...rest } = createContentMessage(
        mergeProps(props, contentMessageProps),
    );

    const [, $contentMessageRootPicked] = splitProps($contentMessageRoot, ['data-message', 'role']);

    const $static = {
        role: 'note' as const,
    };
    const $root = computedProps($static, {
        'data-message': variant,
    });

    return {
        ...rest,
        $root: mergeProps($contentMessageRootPicked, $root),
    };
};
