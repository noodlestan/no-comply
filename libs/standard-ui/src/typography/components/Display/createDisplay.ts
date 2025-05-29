import type { HeadingTagName } from '@no-comply/solid-accessibility';
import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { type DisplayMixinLevel, createDisplayMixin } from '../../mixins';

import type { DisplayAPI, DisplayProps } from './types';

const MAP_LEVEL_TO_COMPONENT: Record<DisplayMixinLevel, HeadingTagName> = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
};

export const createDisplay = (props: DisplayProps): DisplayAPI => {
    const { $root: $textMixinRoot, level } = createDisplayMixin(props);

    const component = () => props.tag ?? MAP_LEVEL_TO_COMPONENT[level()];
    const $localRoot = createComputedProps({
        component,
    });

    return {
        $root: mergeProps($textMixinRoot, $localRoot),
    };
};
