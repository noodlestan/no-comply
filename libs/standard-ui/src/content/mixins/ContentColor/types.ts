import type { ClassList } from '@no-comply/solid-primitives';

export type ContentColorMixinProps = {
    color?: ContentColor;
};

export type ContentColor =
    | 'brand'
    | 'normal'
    | 'muted'
    | 'neutral'
    | 'good'
    | 'meh'
    | 'bad'
    | 'modified'
    | 'selected';

export type ContentColorMixinAPI = {
    elProps: {
        classList: ClassList;
    };
};
