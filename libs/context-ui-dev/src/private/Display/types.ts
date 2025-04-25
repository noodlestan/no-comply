import type { HeadingTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { TagProps } from '@noodlestan/headless-ui';

export type DisplayProps = Omit<TagProps, 'component'> & {
    level: DisplayLevel;
};

export type DisplayLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type DisplayAPI = {
    elProps: Omit<TagProps, 'component'> & {
        component: HeadingTagName;
        classList: ClassList;
    };
};
