import { createAriaRegion } from '@noodlestan/context-ui-aria';
import {
    type PickRequired,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { AlertTriangleIcon, InfoIcon, ThumbsUpIcon, XCircleIcon } from 'lucide-solid';
import type { Component } from 'solid-js';

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
    const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'region');

    const variant = () => props.variant ?? defaultProps.variant;
    const icon = () => VARIANT_ICON_MAP[variant()];
    const $localRoot = createComputedProps({
        'data-message': variant,
    });

    const $icon = createComputedProps({
        icon,
        'aria-label': variant, // WIP expose labels for i18n
    });

    return {
        $root: mergeProps($regionRoot, $localRoot),
        $label,
        $description,
        $icon,
    };
};
