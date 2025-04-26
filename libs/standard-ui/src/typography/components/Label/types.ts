import type { LabelTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { TextMixinAPI, TextMixinProps } from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

export type LabelProps = TextMixinProps & {
    variant?: LabelVariant;
};

export type LabelVariant = ContentSize;

export type LabelAPI = {
    $root: TextMixinAPI['$root'] & {
        component: LabelTagName;
        classList: ClassList;
    };
};
