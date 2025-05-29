import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createPressable } from '../../../action';
import { isExternalURL, linkRelFor } from '../../helpers';

import type { LinkAPI, LinkProps } from './types';

export const createLink = (props: LinkProps): LinkAPI => {
    const { $root: $pressabeRoot } = createPressable(props);

    const href = () => (props.disabled ? undefined : props.href);
    const target = () => props.target;
    const rel = () => linkRelFor(props.href, props.rel);
    const tabIndex = () => (props.disabled ? -1 : undefined);

    const $localRoot = createComputedProps({
        href,
        target,
        rel,
        tabIndex,
        'aria-label': () => props.label,
        'data-external': () => (isExternalURL(props.href) ? '' : undefined),
    });

    return {
        $root: mergeProps($pressabeRoot, $localRoot),
    };
};
