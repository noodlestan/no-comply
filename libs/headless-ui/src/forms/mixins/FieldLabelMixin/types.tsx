import type { ClassList } from '@noodlestan/context-ui-primitives';

export type FieldLabelMixinProps = {
    for: string;
};

export type LabelMixinElementProps = {
    for: string;
    classList: ClassList;
};

export type FormFieldLabelMixinApi = {
    elProps: LabelMixinElementProps;
};
