import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';
import { AlertTriangleIcon, InfoIcon, ThumbsUpIcon, XCircleIcon } from 'lucide-solid';
import { type Component, splitProps } from 'solid-js';

import { createContentMessage } from '../ContentMessage';

import { $STATIC_MESSAGE } from './constants';
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
    const [locals, expose, compose] = createExposable($STATIC_MESSAGE, props);

    const variant = () => locals.variant ?? defaultProps.variant;
    const icon = () => VARIANT_ICON_MAP[variant()];

    const messageProps = computedProps({
        variant,
        icon,
    });
    const contentMessageProps = combineProps(locals, messageProps);
    const { $root: $contentMessageRoot, ...rest } = compose(
        createContentMessage(contentMessageProps),
    );

    const [, $contentMessageRootPicked] = splitProps($contentMessageRoot, ['data-message', 'role']);

    const $static = {
        role: 'note' as const,
    };
    const $root = computedProps($static, {
        'data-message': variant,
    });

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: combineProps($contentMessageRootPicked, $root),
    });
};
