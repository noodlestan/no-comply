import type { Component, JSX } from 'solid-js';

import type { ClassList } from '../../../dom';
import { Flex } from '../../../layouts';
import { FieldsetLabel, type FieldsetLabelSize } from '../FieldsetLabel';

import './Field.css';

// TODO

export type FieldProps = {
    label: string;
    size?: FieldsetLabelSize;
    classList?: ClassList;
    children?: JSX.Element;
};

export const Field: Component<FieldProps> = props => {
    const classList = () => ({
        ...props.classList,
        Fieldset: true,
    });

    return (
        <Flex direction="column" gap="s" classList={classList()}>
            <FieldsetLabel size={props.size}>{props.label}</FieldsetLabel>
            <Flex direction="row" gap="s">
                {props.children}
            </Flex>
        </Flex>
    );
};
