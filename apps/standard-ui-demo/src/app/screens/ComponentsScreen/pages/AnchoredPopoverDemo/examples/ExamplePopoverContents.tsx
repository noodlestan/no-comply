import { CloseButton, Display, Flex, Surface, Text } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

type ExamplePopoverContentsProps = {
    id: string;
};

export const ExamplePopoverContents: Component<ExamplePopoverContentsProps> = props => {
    return (
        <Surface variant="panel" padding="s" tag="section">
            <Flex direction="row" justify="between" align="start" gap="2xl">
                <Flex padding="s">
                    <Display variant="s">Popover Contents</Display>
                </Flex>
                <CloseButton
                    size="small"
                    data-popover-focus-target
                    label="Close Popover"
                    popoverTarget={props.id}
                    popoverTargetAction="hide"
                />
            </Flex>
            <Flex direction="column" padding="s">
                <Text>Layout content</Text>
            </Flex>
        </Surface>
    );
};
