import type { TextTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { TagProps, TextMixinProps } from '@noodlestan/headless-ui';

export type TextProps = Omit<TagProps, 'component'> &
    TextMixinProps & {
        variant?: TextVariant;
        component?: TextTagName;
    };

export type TextVariant = 'small' | 'normal' | 'medium' | 'large';

export type TextAPI = {
    elProps: Omit<TagProps, 'component'> & {
        component: TextTagName;
        classList: ClassList;
    };
};
