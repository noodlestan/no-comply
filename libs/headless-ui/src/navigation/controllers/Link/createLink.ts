import { createComputedProps } from '@noodlestan/context-ui-primitives';

import { isExternalURL, linkRelFor } from '../../helpers';

import type { LinkAPI, LinkProps } from './types';

export const createLink = (props: LinkProps): LinkAPI => {
    const onClick = (ev: MouseEvent) => {
        if (props.disabled) {
            ev.preventDefault();
            return;
        }
        props.onPress?.(ev);
    };

    const $static = {
        onClick,
    };

    const href = () => (props.disabled ? undefined : props.href);
    const target = () => props.target;
    const rel = () => linkRelFor(props.href, props.rel);
    const tabIndex = () => (props.disabled ? -1 : undefined);

    const $localRoot = createComputedProps($static, {
        href,
        target,
        rel,
        tabIndex,
        'aria-label': () => props.label,
        'aria-disabled': () => props.disabled,
        'data-disabled': () => (props.disabled ? '' : undefined),
        'data-external': () => (isExternalURL(props.href) ? '' : undefined),
    });

    return {
        $root: $localRoot,
    };
};
