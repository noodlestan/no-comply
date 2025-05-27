import type { TextTagName } from '@noodlestan/context-ui-aria';

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
