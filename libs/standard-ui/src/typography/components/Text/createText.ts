import { type PickRequired, createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createTextMixin } from '../../mixins';

import type { TextAPI, TextProps } from './types';

const defaultProps: PickRequired<TextProps, 'tag'> = {
    tag: 'p',
};

export const createText = (props: TextProps): TextAPI => {
    const { $root: $textMixinRoot } = createTextMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $localRoot = createComputedProps({
        component,
    });

    return {
        $root: mergeProps($textMixinRoot, $localRoot),
    };
};
