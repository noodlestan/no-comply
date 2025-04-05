import type { TextTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-types';
import type { TagProps, TextMixinProps } from '@noodlestan/headless-ui';

export type TextProps = Omit<TagProps, 'component'> &
    TextMixinProps & {
        variant?: TextVariant;
        component?: TextTagName;
    };

export type TextVariant = 'small' | 'default' | 'medium' | 'large';

export type TextElementProps = Omit<TagProps, 'component'> & {
    component: TextTagName;
    classList: ClassList;
};

export type TextAPI = {
    elProps: TextElementProps;
};
