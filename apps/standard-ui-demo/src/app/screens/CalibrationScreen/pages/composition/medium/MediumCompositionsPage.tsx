import {
    AlignFirstLine,
    Button,
    Display,
    DisplayAligned,
    Flex,
    Icon,
    IconButton,
    Surface,
    Text,
    TextAligned,
} from '@no-comply/standard-ui';
import { PiIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { CalibrationPage } from '../../../private';

export const MediumCompositionsPage: Component = () => {
    return (
        <CalibrationPage title="Medium Compositions">
            <Display level={3}>Medium Heading</Display>

            <Surface variant="card" padding="l">
                <Flex direction="column" gap="xl">
                    <Flex direction="row" align="start" justify="between">
                        <AlignFirstLine height="s" type="display" variant="m">
                            <Flex direction="row" gap="s" align="start">
                                <Icon size="normal" icon={PiIcon} aligned />
                                <Flex>
                                    <DisplayAligned>Display Variant M (Level 3)</DisplayAligned>
                                    <Display variant="xs" tag="p">
                                        And Display Variant XS
                                    </Display>
                                </Flex>
                            </Flex>
                            <IconButton size="normal" icon={PiIcon} label="normal" aligned />
                        </AlignFirstLine>
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

            <Display level={3}>Small Heading</Display>

            <Surface variant="card" padding="l">
                <Flex direction="column" gap="xl">
                    <Flex direction="row" align="start" justify="between">
                        <AlignFirstLine height="s" type="display" variant="s">
                            <Flex direction="row" gap="s" align="start">
                                <Icon size="normal" icon={PiIcon} aligned />
                                <Flex>
                                    <DisplayAligned>Display Variant S (Level 4)</DisplayAligned>
                                </Flex>
                            </Flex>
                            <IconButton size="normal" icon={PiIcon} label="normal" aligned />
                        </AlignFirstLine>
                    </Flex>
                    <Flex direction="row" gap="s">
                        <Button intent="positive" size="normal">
                            Normal
                        </Button>
                        <Button intent="negative" variant="secondary" size="normal">
                            Normal
                        </Button>
                    </Flex>
                </Flex>
            </Surface>

            <Display level={3}>Large Text</Display>

            <Surface variant="card" padding="l">
                <Flex direction="column" gap="xl">
                    <Flex direction="row" align="start" justify="between">
                        <AlignFirstLine height="m" type="text" variant="large">
                            <Flex direction="row" gap="s" align="start">
                                <Icon size="medium" icon={PiIcon} aligned />
                                <Flex>
                                    <TextAligned>Large</TextAligned>
                                    <Text variant="medium" tag="p">
                                        And Text Variant Medium
                                    </Text>
                                </Flex>
                            </Flex>
                            <IconButton size="medium" icon={PiIcon} label="medium" aligned />
                        </AlignFirstLine>
                    </Flex>
                    <Flex direction="row" gap="l">
                        <Button intent="positive" size="medium">
                            Medium
                        </Button>
                        <Button intent="negative" variant="secondary" size="medium">
                            Medium
                        </Button>
                    </Flex>
                </Flex>
            </Surface>
        </CalibrationPage>
    );
};
