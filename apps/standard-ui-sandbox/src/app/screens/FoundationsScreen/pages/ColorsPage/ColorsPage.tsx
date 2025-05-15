import { createIconValue, l } from '@noodlestan/context-ui';
import {
    type ToggleButtonIcons,
    type ToggleButtonLabels,
    createSupportsQuery,
} from '@noodlestan/headless-ui';
import { Callout, Display, Flex, Link, ToggleButton } from '@noodlestan/standard-ui';
import { EyeIcon, EyeOffIcon } from 'lucide-solid';
import { type Component, For, Show, createSignal } from 'solid-js';

import { DemoPage } from '../../../../components';
import { ShowPalette } from '../../components';

const LABELS: ToggleButtonLabels = {
    on: 'Palettes enabled',
    off: 'Palettes disabled (using computed colors)',
};

const ICONS: ToggleButtonIcons = {
    on: createIconValue(EyeIcon),
    off: createIconValue(EyeOffIcon),
};

export const ColorsPage: Component = () => {
    const [enablePalettes, setenablePalettes] = createSignal(true);

    const { isSupported } = createSupportsQuery({ query: 'color: --f-color(black, 100)' });

    const palettes = () => {
        return ['pink', 'red', 'yellow', 'olive', 'green', 'ocean', 'blue', 'indigo', 'violet'];
    };

    const label = () => l(enablePalettes() && isSupported() ? LABELS.on : LABELS.off);

    const handleSwitchModePress = () => setenablePalettes(v => !v);

    return (
        <DemoPage title="Colors">
            <Display level={3}>Palettes</Display>
            <Flex direction="column" gap="m">
                <Flex direction="row" align="center" gap="s">
                    <ToggleButton
                        disabled={!isSupported()}
                        value={enablePalettes() && isSupported()}
                        onPress={handleSwitchModePress}
                        labels={LABELS}
                        icons={ICONS}
                    />
                    {label()}
                </Flex>
                <Show when={!isSupported()}>
                    <Callout variant="warning">
                        Your browser does not support Custom CSS functions (
                        <Link href="https://github.com/w3c/csswg-drafts/issues/9350">Proposal</Link>
                        )
                    </Callout>
                </Show>
            </Flex>
            <ShowPalette p="neutral" enablePalettes={enablePalettes()} />
            <ShowPalette p="labels" enablePalettes={enablePalettes()} />
            <Flex direction="column">
                <For each={palettes()}>
                    {palette => <ShowPalette p={palette} enablePalettes={enablePalettes()} />}
                </For>
            </Flex>
        </DemoPage>
    );
};
