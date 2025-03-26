import type { Component, JSX } from 'solid-js';

import type { ClassList } from '../../../dom';
import { Flex, type FlexDirection } from '../../../layouts';
import { FieldsetLabel, type FieldsetLabelSize } from '../FieldsetLabel';

export type FieldsetProps = {
    label: string;
    direction?: FlexDirection;
    wrap?: boolean;
    size?: FieldsetLabelSize;
    classList?: ClassList;
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
            <Flex direction={props.direction} gap="s" wrap={props.wrap}>
                {props.children}
            </Flex>
        </Flex>
    );
};
