import type { TextTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { TextMixinAPI, TextMixinProps } from '@noodlestan/headless-ui';

export type TextProps = TextMixinProps & {
    tag?: TextTagName;
    variant?: TextVariant;
};

export type TextVariant = 'small' | 'normal' | 'medium' | 'large';

export type TextAPI = {
    $root: TextMixinAPI['$root'] & {
        component: TextTagName;
        classList: ClassList;
    };
};
