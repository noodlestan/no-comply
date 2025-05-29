import { CloseButton, Display, Flex, Surface } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

type ColorPopoverProps = {
    id: string;
    color: string;
};

export const ColorPopover: Component<ColorPopoverProps> = props => {
    return (
        <Surface variant="panel" padding="s" tag="section">
            <Flex direction="row" justify="between" align="start" gap="2xl">
                <Flex padding="s">
                    <Display variant="s">{props.color}</Display>
                </Flex>
                <CloseButton
                    size="small"
                    data-popover-focus-target
                    label="Close Popover"
                    popoverTarget={props.id}
                    popoverTargetAction="hide"
                />
            </Flex>
        </Surface>
    );
};
