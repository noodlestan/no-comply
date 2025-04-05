import type { ClassList } from '@noodlestan/context-ui-types';

export type TextMixinProps = {
    nowrap?: boolean;
};

export type TextMixinElementProps = {
    classList: ClassList;
};

export type TextMixinAPI = {
    elProps: TextMixinElementProps;
};
