import type {
    FieldAPI as HeadlessFieldAPI,
    FieldProps as HeadlessFieldProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';
import type { FieldLabelProps } from '../FieldLabel';

export type FieldProps = HeadlessFieldProps & {
    size?: ContentSize;
};

export type FieldAPI = {
    $root: HeadlessFieldAPI['$root'] & {
        classList: ClassList;
    };
    fieldLabelProps: HeadlessFieldAPI['$label'] & {
        size: FieldLabelProps['size'];
    };
    $description: HeadlessFieldAPI['$description'];
    $input: HeadlessFieldAPI['$input'];
    $feedback: HeadlessFieldAPI['$feedback'];
    context: HeadlessFieldAPI['context'];
    contextValue: HeadlessFieldAPI['contextValue'];
    hasFeedback: HeadlessFieldAPI['hasFeedback'];
};
