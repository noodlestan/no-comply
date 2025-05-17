import { mergeProps } from '@noodlestan/context-ui-primitives';

import { createPressable } from '../Pressable';

import type { ButtonAPI, ButtonProps } from './types';

export const createButton = (props: ButtonProps): ButtonAPI => {
    const { $root: $pressabeRoot } = createPressable(props);

    const $localRoot = {
        onFocus: (ev: FocusEvent) => props.onFocus?.(ev),
        onBlur: (ev: FocusEvent) => props.onBlur?.(ev),
    };

    return {
        $root: mergeProps($pressabeRoot, $localRoot),
    };
};
