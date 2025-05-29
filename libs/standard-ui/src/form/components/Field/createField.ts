import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createFieldMixin, createField as createHeadlessField } from '@noodlestan/headless-ui';

import styles from './Field.module.css';
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
    const classList = createClassList(styles, () => ['Field', `.Field-size-${size()}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    const fieldLabelProps = createComputedProps({
        size,
    });

    return {
        $root: mergeProps($fieldRoot, $fieldMixinRoot, $localRoot),
        fieldLabelProps: mergeProps($label, fieldLabelProps),
        $description,
        $input,
        $feedback,
        context,
        contextValue,
        hasFeedback,
    };
};
