import type { TextTagName } from '@no-comply/solid-accessibility';

import type { TextMixinAPI, TextMixinProps } from '../../mixins';

export type TextOwnProps = {
    tag?: TextTagName;
};

export type TextProps = TextMixinProps & TextOwnProps;

export type TextAPI = {
    $root: TextMixinAPI['$root'] & {
        component: TextTagName;
    };
};
