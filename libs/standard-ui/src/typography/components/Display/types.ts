import type { HeadingTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-types';
import type { TagProps, TextMixinProps } from '@noodlestan/headless-ui';

export type DisplayProps = Omit<TagProps, 'component'> &
    TextMixinProps & {
        level?: DisplayLevel;
        variant?: DisplayVariant;
        component?: HeadingTagName;
    };

export type DisplayLevel = 1 | 2 | 3 | 4 | 5;

export type DisplayVariant = 'hero' | 'xl' | 'l' | 'm' | 's' | 'xs';

export type DisplayElementProps = Omit<TagProps, 'component'> & {
    component: HeadingTagName;
    classList: ClassList;
};

export type DisplayAPI = {
    elProps: DisplayElementProps;
};
