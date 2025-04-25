import {
    type ClassList,
    type PickRequired,
    createClassList,
} from '@noodlestan/context-ui-primitives';
import type { ParentComponent } from 'solid-js';

import type { ContentSize } from '../../../types';

import styles from './FieldsetLabel.module.css';

export type FieldsetLabelProps = {
    size?: ContentSize;
    classList?: ClassList;
};

const defaultProps: PickRequired<FieldsetLabelProps, 'size'> = {
    size: 'normal',
};

export const FieldsetLabel: ParentComponent<FieldsetLabelProps> = props => {
    const size = () => props.size ?? defaultProps.size;

    const classList = createClassList(
        styles,
        () => ['FieldsetLabel', `FieldsetLabel-size-${size()}`],
        () => props.classList,
    );

    return <label classList={classList()}>{props.children}</label>;
};
