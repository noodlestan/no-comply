import { type ClassList, type PickRequired, createClassList } from '@noodlestan/context-ui-types';
import type { ParentComponent } from 'solid-js';

import styles from './Label.module.css';

export type LabelSize = 'xs' | 's' | 'm' | 'l';

export type LabelProps = {
    size?: LabelSize;
    for?: string;
    classList?: ClassList;
};

const defaultProps: PickRequired<LabelProps, 'size'> = {
    size: 's',
};

export const Label: ParentComponent<LabelProps> = props => {
    const size = () => props.size ?? defaultProps.size;

    const classList = createClassList(
        styles,
        () => ['Label', `Label-size-${size()}`],
        () => props.classList,
    );

    return (
        <label for={props.for} classList={classList()}>
            {props.children}
        </label>
    );
};
