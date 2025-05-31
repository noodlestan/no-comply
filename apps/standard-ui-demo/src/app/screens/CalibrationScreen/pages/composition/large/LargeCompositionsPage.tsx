import {
    AlignFirstLine,
    Button,
    Display,
    DisplayAligned,
    Flex,
    Icon,
    IconButton,
    Surface,
} from '@no-comply/standard-ui';
import { PiIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { CalibrationPage } from '../../../private';

export const LargeCompositionsPage: Component = () => {
    return (
        <CalibrationPage title="Large Compositions">
            <Display level={3}>Hero</Display>

            <Surface variant="card" padding="l">
                <Flex direction="column" gap="xl">
                    <Flex direction="row" align="start" justify="between">
                        <AlignFirstLine height="l" type="display" variant="hero">
                            <Flex direction="row" gap="s" align="start">
                                <Icon size="large" icon={PiIcon} aligned />
                                <Flex>
                                    <DisplayAligned>Display Variant Hero</DisplayAligned>
                                    <Display variant="l" tag="p">
                                        And Display Variant L
                                    </Display>
                                </Flex>
                            </Flex>
                            <IconButton size="medium" icon={PiIcon} label="large" aligned />
                        </AlignFirstLine>
                    </Flex>
                    <Flex direction="row" gap="xl">
                        <Button intent="positive" size="large">
                            Large
                        </Button>
                        <Button intent="negative" variant="secondary" size="large">
                            Large
                        </Button>
                    </Flex>
                </Flex>
            </Surface>

            <Display level={3}>XL</Display>

            <Surface variant="card" padding="l">
                <Flex direction="column" gap="xl">
                    <Flex direction="row" align="start" justify="between">
                        <AlignFirstLine height="l" type="display" variant="xl">
                            <Flex direction="row" gap="s" align="start">
                                <Icon size="large" icon={PiIcon} aligned />
                                <Flex>
                                    <DisplayAligned>Display Variant XL (Level 1)</DisplayAligned>
                                    <Display variant="m" tag="p">
                                        And Display Variant M
                                    </Display>
                                </Flex>
                            </Flex>
                            <IconButton size="medium" icon={PiIcon} label="large" aligned />
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

            <Display level={3}>L</Display>

            <Surface variant="card" padding="l">
                <Flex direction="column" gap="xl">
                    <Flex direction="row" align="start" justify="between">
                        <AlignFirstLine height="l" type="display" variant="l">
                            <Flex direction="row" gap="s" align="start">
                                <Icon size="large" icon={PiIcon} aligned />
                                <Flex>
                                    <DisplayAligned>Display Variant L (Level 2)</DisplayAligned>
                                    <Display variant="m" tag="p">
                                        And Display Variant M
                                    </Display>
                                </Flex>
                            </Flex>
                            <IconButton size="medium" icon={PiIcon} label="medium" aligned />
                        </AlignFirstLine>
                    </Flex>
                    <Flex direction="column" gap="l">
                        <Button intent="positive" size="medium">
                            Medium
                        </Button>
                        <Button intent="negative" variant="secondary" size="medium">
                            Medium
                        </Button>
                        <Flex direction="row" gap="l">
                            <Button intent="positive" size="medium">
                                Medium
                            </Button>
                            <Button intent="negative" variant="secondary" size="medium">
                                Medium
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Surface>
        </CalibrationPage>
    );
};
