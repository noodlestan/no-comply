import type { ClassList } from '@noodlestan/context-ui-primitives';

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
