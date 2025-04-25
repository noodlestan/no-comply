import type { LabelTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { TagProps, TextMixinProps } from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

export type LabelProps = Omit<TagProps, 'component'> &
    TextMixinProps & {
        variant?: LabelVariant;
    };

export type LabelVariant = ContentSize;

export type LabelAPI = {
    elProps: Omit<TagProps, 'component'> & {
        component: LabelTagName;
        classList: ClassList;
    };
};
