import type { ClassList } from '@noodlestan/context-ui-primitives';

export type FieldMixinProps = object;

export type FieldMixinElementProps = {
    classList: ClassList;
};

export type FieldMixinApi = {
    elProps: FieldMixinElementProps;
};
