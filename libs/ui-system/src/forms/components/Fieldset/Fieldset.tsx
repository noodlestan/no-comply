import { Component, JSX } from 'solid-js';

import { Flex } from '../../../layouts';
import { FieldsetLabel, FieldsetLabelSize } from '../FieldsetLabel';

import './Fieldset.css';

export type FieldsetProps = {
    label: string;
    size?: FieldsetLabelSize;
    classList?: { [key: string]: boolean };
    children?: JSX.Element;
};

export const Fieldset: Component<FieldsetProps> = props => {
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
