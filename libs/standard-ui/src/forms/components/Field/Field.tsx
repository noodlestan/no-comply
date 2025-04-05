import { type ClassList, createClassList } from '@noodlestan/context-ui-types';
import type { ParentComponent } from 'solid-js';

import { Flex } from '../../../layout';
import { FieldsetLabel, type FieldsetLabelSize } from '../FieldsetLabel';

import styles from './Field.module.css';

// TODO

export type FieldProps = {
    label: string;
    size?: FieldsetLabelSize;
    classList?: ClassList;
};

export const Field: ParentComponent<FieldProps> = props => {
    const classList = createClassList(styles, 'Fieldset', () => props.classList);

    return (
        <Flex direction="column" gap="s" classList={classList()}>
            <FieldsetLabel size={props.size}>{props.label}</FieldsetLabel>
            <Flex direction="row" gap="s">
                {props.children}
            </Flex>
        </Flex>
    );
};
