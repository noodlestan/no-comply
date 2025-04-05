import type { ClassList } from '@noodlestan/context-ui-types';

export type FormFieldMixinProps = object;

export type FormFieldMixinElementProps = {
    classList: ClassList;
};

export type FormFieldMixinApi = {
    elProps: FormFieldMixinElementProps;
};
