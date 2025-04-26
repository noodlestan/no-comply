import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import {
    createFieldLabelMixin,
    createFieldLabel as createHeadlessFieldLabel,
} from '@noodlestan/headless-ui';

import styles from './FieldLabel.module.css';
import type { FieldLabelAPI, FieldLabelProps } from './types';

const defaultProps: PickRequired<FieldLabelProps, 'size'> = {
    size: 'normal',
};

export const createFieldLabel = (props: FieldLabelProps): FieldLabelAPI => {
    const { $root: $fieldLabelRoot } = createHeadlessFieldLabel(props);
    const { $root: $fieldLabelMixinRoot } = createFieldLabelMixin();

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => ['FieldLabel', `FieldLabel-size-${size()}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($fieldLabelRoot, $fieldLabelMixinRoot, $localRoot),
    };
};
