import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { FlexMixinDirection } from '@noodlestan/headless-ui';
import type { ParentComponent } from 'solid-js';

import { Flex } from '../../../layout';
import type { ContentSize } from '../../../types';
import { FieldsetLabel } from '../FieldsetLabel';

export type FieldsetProps = {
    label: string;
    direction?: FlexMixinDirection;
    wrap?: boolean;
    size?: ContentSize;
    classList?: ClassList;
};

export const Fieldset: ParentComponent<FieldsetProps> = props => {
    return (
        <Flex direction="column" gap="xl" classList={props.classList}>
            <FieldsetLabel size={props.size}>{props.label}</FieldsetLabel>
            <Flex direction={props.direction} gap="l" wrap={props.wrap}>
                {props.children}
            </Flex>
        </Flex>
    );
};
