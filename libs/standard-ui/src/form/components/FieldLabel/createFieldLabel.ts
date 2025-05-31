import {
    createFieldLabelMixin,
    createFieldLabel as createHeadlessFieldLabel,
} from '@no-comply/solid-composables';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import styles from './FieldLabel.module.scss';
import type { FieldLabelAPI, FieldLabelProps } from './types';

const defaultProps: PickRequired<FieldLabelProps, 'size'> = {
    size: 'normal',
};

export const createFieldLabel = (props: FieldLabelProps): FieldLabelAPI => {
    const { $root: $fieldLabelRoot } = createHeadlessFieldLabel(props);
    const { $root: $fieldLabelMixinRoot } = createFieldLabelMixin();

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => ['FieldLabel', `size-${size()}`]);
    const $root = computedProps({
        classList,
    });

    return {
        $root: combineProps($fieldLabelRoot, $fieldLabelMixinRoot, $root),
    };
};
