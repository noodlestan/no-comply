import { Display, Flex, Surface } from '@noodlestan/standard-ui';
import { type Component, For } from 'solid-js';

import { DemoPage } from '../../../../components';
import { ExampleTiny } from '../../../../examples';
import { ShowPalette } from '../../components';

export const ColorsPage: Component = () => {
    const palettes = () => {
        return ['pink', 'red', 'yellow', 'olive', 'green', 'ocean', 'blue', 'indigo', 'violet'];
    };

    return (
        <DemoPage title="Colors">
            <Display level={3}>Palettes</Display>
            <ShowPalette p="neutral" />
            <ShowPalette p="labels" />
            <Flex direction="column">
                <For each={palettes()}>{palette => <ShowPalette p={palette} />}</For>
            </Flex>
            <Display level={3}>Surfaces</Display>
            <Flex direction="column">
                <Surface variant="stage" tag="section">
                    <Flex padding="l" gap="xl">
                        <Display level={4}>Stage</Display>
                        <ExampleTiny title="Base" />
                        <Surface variant="card" tag="section">
                            <ExampleTiny title="Card" />
                        </Surface>
                        <Surface variant="panel" tag="section">
                            <ExampleTiny title="Panel" />
                        </Surface>

                        <Surface variant="page" tag="section">
                            <Flex padding="l" gap="xl">
                                <Display level={4}>Page</Display>
                                <ExampleTiny title="Base" />
                                <Surface variant="card" tag="section">
                                    <ExampleTiny title="Card" />
                                </Surface>
                                <Surface variant="panel" tag="section">
                                    <ExampleTiny title="Panel" />
                                </Surface>

                                <Surface variant="card" tag="section">
                                    <Flex padding="l" gap="xl">
                                        <Display level={4}>Card</Display>
                                        <ExampleTiny title="base" />

                                        <Surface variant="panel" tag="section">
                                            <Flex
                                                direction="row"
                                                padding="l"
                                                gap="s"
                                                align="center"
                                            >
                                                <ExampleTiny title="Panel" />
                                            </Flex>
                                        </Surface>
                                    </Flex>
                                </Surface>
                            </Flex>
                        </Surface>
                    </Flex>
                </Surface>
            </Flex>
        </DemoPage>
    );
};
