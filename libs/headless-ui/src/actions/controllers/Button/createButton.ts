import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import { linkRelFor } from '../../../navigation';
import { createPressable } from '../Pressable';

import type { ButtonAPI, ButtonProps } from './types';

export const createButton = (props: ButtonProps): ButtonAPI => {
    const { $root: $pressabeRoot } = createPressable(props);

    const $static = {
        onFocus: (ev: FocusEvent) => props.onFocus?.(ev),
        onBlur: (ev: FocusEvent) => props.onBlur?.(ev),
    };
    const id = () => props.id;
    const href = () => props.href;
    const target = () => props.target;
    const rel = () => (props.href ? linkRelFor(props.href, props.rel) : undefined);

    const $localRoot = createComputedProps($static, {
        id,
        href,
        target,
        rel,
    });

    return {
        $root: mergeProps($pressabeRoot, $localRoot),
    };
};
