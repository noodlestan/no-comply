import { createAriaRegion } from '@noodlestan/context-ui-aria';
import {
    type PickRequired,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
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
    const regionProps = mergeProps(props, { labelled: true, described: true });
    const { $root: $regionRoot, $label, $description } = createAriaRegion(regionProps, 'region');

    const variant = () => props.variant ?? defaultProps.variant;
    const role = () => (variant() === 'busy' ? ('status' as const) : ('alert' as const));
    const icon = () => VARIANT_ICON_MAP[variant()];
    const $localRoot = createComputedProps({
        role,
        'aria-live': () => (variant() === 'busy' ? 'polite' : 'assertive'),
        'data-feedback': variant,
    });

    const $title = createComputedProps({
        children: () => props.title,
    });

    const iconProps = createComputedProps({
        icon,
        'aria-label': variant, // WIP expose labels for i18n
    });

    return {
        $root: mergeProps($regionRoot, $localRoot),
        $title: mergeProps($label, $title),
        $description,
        iconProps,
    };
};
