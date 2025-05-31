import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createTextMixin } from '../../mixins';

import type { TextAPI, TextProps } from './types';

const defaultProps: PickRequired<TextProps, 'tag'> = {
    tag: 'p',
};

export const createText = (props: TextProps): TextAPI => {
    const { $root: $textMixinRoot } = createTextMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $root = computedProps({
        component,
    });

    return {
        $root: combineProps($textMixinRoot, $root),
    };
};
