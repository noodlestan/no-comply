import type { ClassList } from '@noodlestan/context-ui-types';

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

export type ContentColorMixinElementProps = {
    classList: ClassList;
};

export type ContentColorMixinAPI = {
    elProps: ContentColorMixinElementProps;
};
