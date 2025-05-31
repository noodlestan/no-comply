import { createFieldMixin, createField as createHeadlessField } from '@no-comply/solid-composables';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import styles from './Field.module.scss';
import type { FieldAPI, FieldProps } from './types';

const defaultProps: PickRequired<FieldProps, 'size'> = {
    size: 'normal',
};

export const createField = (props: FieldProps): FieldAPI => {
    const {
        $root: $fieldRoot,
        $label,
        $description,
        $input,
        $feedback,
        context,
        contextValue,
        hasFeedback,
    } = createHeadlessField(props);
    const { $root: $fieldMixinRoot } = createFieldMixin();

    const size = () => props.size || defaultProps.size;
    const classList = createClassList(styles, () => ['Field', `size-${size()}`]);
    const $root = computedProps({
        classList,
    });

    const fieldLabelProps = computedProps({
        size,
    });

    return {
        $root: combineProps($fieldRoot, $fieldMixinRoot, $root),
        fieldLabelProps: combineProps($label, fieldLabelProps),
        $description,
        $input,
        $feedback,
        context,
        contextValue,
        hasFeedback,
    };
};
