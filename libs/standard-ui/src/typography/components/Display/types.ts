import type { HeadingTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { TextMixinAPI, TextMixinProps } from '@noodlestan/headless-ui';

export type DisplayProps = TextMixinProps & {
    tag?: HeadingTagName;
    level?: DisplayLevel;
    variant?: DisplayVariant;
};

export type DisplayLevel = 1 | 2 | 3 | 4 | 5;

export type DisplayVariant = 'hero' | 'xl' | 'l' | 'm' | 's' | 'xs';

export type DisplayAPI = {
    $root: TextMixinAPI['$root'] & {
        component: HeadingTagName;
        classList: ClassList;
    };
};
