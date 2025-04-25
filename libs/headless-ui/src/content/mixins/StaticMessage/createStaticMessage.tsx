import { createAriaRegion } from '@noodlestan/context-ui-aria';
import { type PickRequired, createComputedProps } from '@noodlestan/context-ui-primitives';
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
    const {
        elProps: regionProps,
        labelProps,
        descriptionProps,
    } = createAriaRegion(props, 'region');

    const variant = () => props.variant ?? defaultProps.variant;
    const icon = () => VARIANT_ICON_MAP[variant()];

    const elProps = createComputedProps(regionProps, {
        'data-callout': variant,
    });

    const iconProps = createComputedProps({
        icon,
        'aria-label': variant, // TODO expose labels for i18n
    });

    return {
        elProps,
        labelProps,
        descriptionProps,
        iconProps,
    };
};
