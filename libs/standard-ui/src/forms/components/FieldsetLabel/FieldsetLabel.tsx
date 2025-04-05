import { type ClassList, type PickRequired, createClassList } from '@noodlestan/context-ui-types';
import type { ParentComponent } from 'solid-js';

import styles from './FieldsetLabel.module.css';

export type FieldsetLabelSize = 'xs' | 's' | 'm' | 'l';

export type FieldsetLabelProps = {
    size?: FieldsetLabelSize;
    classList?: ClassList;
};

const defaultProps: PickRequired<FieldsetLabelProps, 'size'> = {
    size: 's',
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
