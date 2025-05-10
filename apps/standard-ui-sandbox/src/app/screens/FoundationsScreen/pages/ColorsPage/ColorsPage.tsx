import { Display, Flex, Surface } from '@noodlestan/standard-ui';
import { type Component, For } from 'solid-js';

import { DemoPage } from '../../../../components';
import { ShowPalette, ShowTextVariants } from '../../components';

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
                        <ShowTextVariants />
                    </Flex>
                </Surface>
                <Surface variant="page" tag="section">
                    <Flex padding="l" gap="xl">
                        <Display level={4}>Page</Display>
                        <ShowTextVariants />
                    </Flex>
                </Surface>
                <Surface variant="card" tag="section">
                    <Flex padding="l" gap="xl">
                        <Display level={4}>Card</Display>
                        <ShowTextVariants />
                    </Flex>
                </Surface>
                <Surface variant="page" tag="section">
                    <Flex padding="l" gap="xl">
                        <Display level={4}>Page</Display>
                        <ShowTextVariants />
                    </Flex>
                </Surface>
            </Flex>
        </DemoPage>
    );
};
