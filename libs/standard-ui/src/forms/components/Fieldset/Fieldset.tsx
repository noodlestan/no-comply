import type { ClassList } from '@noodlestan/context-ui-types';
import type { FlexMixinDirection } from '@noodlestan/headless-ui';
import type { ParentComponent } from 'solid-js';

import { Flex } from '../../../layout';
import { FieldsetLabel, type FieldsetLabelSize } from '../FieldsetLabel';

export type FieldsetProps = {
    label: string;
    direction?: FlexMixinDirection;
    wrap?: boolean;
    size?: FieldsetLabelSize;
    classList?: ClassList;
};

export const Fieldset: ParentComponent<FieldsetProps> = props => {
    return (
        <Flex direction="column" gap="s" classList={props.classList}>
            <FieldsetLabel size={props.size}>{props.label}</FieldsetLabel>
            <Flex direction={props.direction} gap="s" wrap={props.wrap}>
                {props.children}
            </Flex>
        </Flex>
    );
};
