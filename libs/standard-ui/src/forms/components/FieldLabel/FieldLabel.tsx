import {
    type ClassList,
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createFieldLabelMixin } from '@noodlestan/headless-ui';
import { type ParentComponent, splitProps } from 'solid-js';

import type { ContentSize } from '../../../types';

import styles from './FieldLabel.module.css';

export type FieldLabelProps = {
    size?: ContentSize;
    for: string;
    classList?: ClassList;
};

const defaultProps: PickRequired<FieldLabelProps, 'size'> = {
    size: 'medium',
};

export const FieldLabel: ParentComponent<FieldLabelProps> = props => {
    const [locals, others] = splitProps(props, ['size', 'children']);

    const { elProps: labelMixinProps } = createFieldLabelMixin(others);

    const size = () => locals.size ?? defaultProps.size;
    const classList = createClassList(styles, () => ['FieldLabel', `FieldLabel-size-${size()}`]);

    const fieldProps = createComputedProps({
        classList,
    });

    const elProps = mergeProps(others, labelMixinProps, fieldProps);

    return (
        <label {...elProps} for={elProps.for}>
            {locals.children}
        </label>
    );
};
