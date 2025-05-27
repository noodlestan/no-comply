import {
    Button,
    Display,
    DisplayAligned,
    FirstLineAlign,
    Flex,
    Icon,
    IconButton,
    Surface,
    Text,
    TextAligned,
} from '@noodlestan/standard-ui';
import { PiIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { DemoPage } from '../../../../../templates';

export const SmallCompositionsPage: Component = () => {
    return (
        <DemoPage title="Small Compositions">
            <Display level={3}>Extra Small Heading</Display>

            <Surface variant="card" padding="l">
                <Flex direction="column" gap="xl">
                    <Flex direction="row" align="start" justify="between">
                        <FirstLineAlign height="2xs" type="display" variant="xs">
                            <Flex direction="row" gap="s" align="start">
                                <Icon size="small" icon={PiIcon} aligned />
                                <Flex>
                                    <DisplayAligned>Display Variant XS (Level 5)</DisplayAligned>
                                </Flex>
                            </Flex>
                            <IconButton size="small" icon={PiIcon} label="small" aligned />
                        </FirstLineAlign>
                    </Flex>
                    <Flex direction="row" gap="s">
                        <Button intent="positive" size="small">
                            Small
                        </Button>
                        <Button intent="negative" variant="secondary" size="small">
                            Small
                        </Button>
                    </Flex>
                </Flex>
            </Surface>

            <Display level={3}>Medium Text</Display>

            <Surface variant="card" padding="l">
                <Flex direction="column" gap="xl">
                    <Flex direction="row" align="start" justify="between">
                        <FirstLineAlign height="s" type="text" variant="medium">
                            <Flex direction="row" gap="s" align="start">
                                <Icon size="normal" icon={PiIcon} aligned />
                                <Flex>
                                    <TextAligned>Medium</TextAligned>
                                    <Text variant="normal" tag="p">
                                        And Text Variant Normal
                                    </Text>
                                </Flex>
                            </Flex>
                            <IconButton size="normal" icon={PiIcon} label="normal" aligned />
                        </FirstLineAlign>
                    </Flex>
                    <Flex direction="row" gap="l">
                        <Button intent="positive" size="normal">
                            Normal
                        </Button>
                        <Button intent="negative" variant="secondary" size="normal">
                            Normal
                        </Button>
                    </Flex>
                </Flex>
            </Surface>

            <Display level={3}>Normal Text</Display>

            <Surface variant="card" padding="l">
                <Flex direction="column" gap="xl">
                    <Flex direction="row" align="start" justify="between">
                        <FirstLineAlign height="s" type="text" variant="normal">
                            <Flex direction="row" gap="s" align="start">
                                <Icon size="normal" icon={PiIcon} aligned />
                                <Flex>
                                    <TextAligned>Normal</TextAligned>
                                    <Text variant="small">And Text Variant Small</Text>
                                </Flex>
                            </Flex>
                            <IconButton size="normal" icon={PiIcon} label="normal" aligned />
                        </FirstLineAlign>
                    </Flex>
                    <Flex direction="row" gap="m">
                        <Button intent="positive" size="normal">
                            Normal
                        </Button>
                        <Button intent="negative" variant="secondary" size="normal">
                            Normal
                        </Button>
                    </Flex>
                </Flex>
            </Surface>

            <Display level={3}>Small Text</Display>

            <Surface variant="card" padding="l">
                <Flex direction="column" gap="xl">
                    <Flex direction="row" align="start" justify="between">
                        <FirstLineAlign height="xs" type="text" variant="small">
                            <Flex direction="row" gap="s" align="start">
                                <Icon size="small" icon={PiIcon} aligned />
                                <Flex>
                                    <TextAligned>Small</TextAligned>
                                </Flex>
                            </Flex>
                            <IconButton size="small" icon={PiIcon} label="small" aligned />
                        </FirstLineAlign>
                    </Flex>
                    <Flex direction="row" gap="s">
                        <Button intent="positive" size="small">
                            Small
                        </Button>
                        <Button intent="negative" variant="secondary" size="small">
                            Small
                        </Button>
                    </Flex>
                </Flex>
            </Surface>
        </DemoPage>
    );
};
