import type { ClassList } from '@noodlestan/context-ui-types';
import type { ParentComponent } from 'solid-js';

import type { FlexMixinDirection } from '@noodlestan/headless-ui/src/layout';
import { FieldsetLabel, type FieldsetLabelSize } from '../FieldsetLabelBase';

export type FieldsetProps = {
    label: string;
    direction?: FlexMixinDirection;
    wrap?: boolean;
    size?: FieldsetLabelSize;
    classList?: ClassList;
};

export const Fieldset: ParentComponent<FieldsetProps> = props => {
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
