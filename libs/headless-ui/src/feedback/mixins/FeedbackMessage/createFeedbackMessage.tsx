import { createAriaRegion } from '@noodlestan/context-ui-aria';
import { type PickRequired, createComputedProps } from '@noodlestan/context-ui-primitives';
import { HourglassIcon, ThumbsUpIcon, XCircleIcon } from 'lucide-solid';
import type { Component } from 'solid-js';

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
    const { elProps: regionProps, labelProps, descriptionProps } = createAriaRegion(props);

    const variant = () => props.variant ?? defaultProps.variant;

    const role = () => (variant() === 'busy' ? 'status' : 'alert');

    const icon = () => VARIANT_ICON_MAP[variant()];

    const elProps = createComputedProps(regionProps, {
        role,
        'aria-live': () => (variant() === 'busy' ? 'polite' : 'assertive'),
        'data-feedback': variant,
    });

    const iconProps = createComputedProps({
        icon,
        'aria-label': variant,
    });

    return {
        elProps,
        labelProps,
        descriptionProps,
        iconProps,
    };
};
