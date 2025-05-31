import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';
import { HourglassIcon, ThumbsUpIcon, XCircleIcon } from 'lucide-solid';
import { type Component, splitProps } from 'solid-js';

import { createContentMessage } from '../../../content';

import type { FeedbackMessageAPI, FeedbackMessageProps, FeedbackMessageVariant } from './types';

const VARIANT_ICON_MAP: Record<FeedbackMessageVariant, Component> = {
    busy: HourglassIcon,
    error: XCircleIcon,
    success: ThumbsUpIcon,
};

const defaultProps: PickRequired<FeedbackMessageProps, 'variant'> = {
    variant: 'busy',
};

export const createFeedbackMessage = (props: FeedbackMessageProps): FeedbackMessageAPI => {
    const variant = () => props.variant ?? defaultProps.variant;
    const role = () => (variant() === 'busy' ? ('status' as const) : ('alert' as const));
    const icon = () => VARIANT_ICON_MAP[variant()];

    const contentMessageProps = computedProps({
        variant,
        icon,
    });
    const { $root: $contentMessageRoot, ...rest } = createContentMessage(
        combineProps(props, contentMessageProps),
    );

    const [, $contentMessageRootPicked] = splitProps($contentMessageRoot, ['data-message', 'role']);

    const $root = computedProps({
        role,
        'aria-live': () => (variant() === 'busy' ? 'polite' : 'assertive'),
        'data-message': variant,
    });

    return {
        ...rest,
        $root: combineProps($contentMessageRootPicked, $root),
    };
};
