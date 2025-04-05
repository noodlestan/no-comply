import type { LabelTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-types';
import type { TagProps, TextMixinProps } from '@noodlestan/headless-ui';

export type LabelProps = Omit<TagProps, 'component'> &
    TextMixinProps & {
        variant?: LabelVariant;
    };

export type LabelVariant = 'small' | 'default' | 'medium' | 'large';

export type LabelElementProps = Omit<TagProps, 'component'> & {
    component: LabelTagName;
    classList: ClassList;
};

export type LabelAPI = {
    elProps: LabelElementProps;
};
