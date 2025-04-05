import type { ClassList } from '@noodlestan/context-ui-types';

export type FormFieldLabelMixinProps = {
    for: string;
};

export type FormFieldLabelMixinElementProps = {
    for: string;
    classList: ClassList;
};

export type FormFieldLabelMixinApi = {
    elProps: FormFieldLabelMixinElementProps;
};
