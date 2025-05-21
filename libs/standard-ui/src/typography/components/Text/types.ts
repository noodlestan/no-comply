import type { TextTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { TextMixinAPI, TextMixinProps } from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

export type TextProps = TextMixinProps & {
    tag?: TextTagName;
    variant?: TextVariant;
};

export type TextVariant = ContentSize;

export type TextAPI = {
    $root: TextMixinAPI['$root'] & {
        component: TextTagName;
        classList: ClassList;
    };
};
