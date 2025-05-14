import { Display, Flex } from '@noodlestan/standard-ui';
import { type Component, For } from 'solid-js';

import { DemoPage } from '../../../../components';
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
        </DemoPage>
    );
};
