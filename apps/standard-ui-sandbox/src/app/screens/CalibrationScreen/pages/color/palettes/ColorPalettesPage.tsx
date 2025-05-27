import { createIconValue, l } from '@noodlestan/context-ui';
import {
    type ToggleActionIcons,
    type ToggleActionLabels,
    createSupportsQuery,
} from '@noodlestan/headless-ui';
import { Callout, Flex, Link, ToggleButton } from '@noodlestan/standard-ui';
import { EyeIcon, EyeOffIcon } from 'lucide-solid';
import { type Component, For, Show, createSignal } from 'solid-js';

import { DemoPage } from '../../../../../templates';
import { ShowPalette } from '../../../components';

const LABELS: ToggleActionLabels = {
    on: 'Palettes enabled',
    off: 'Palettes disabled (using computed colors)',
};

const ICONS: ToggleActionIcons = {
    on: createIconValue(EyeIcon),
    off: createIconValue(EyeOffIcon),
};

export const ColorPalettesPage: Component = () => {
    const [enablePalettes, setenablePalettes] = createSignal(true);

    const { isSupported } = createSupportsQuery({ query: 'color: --f-color(black, 100)' });

    const palettes = () => {
        return ['pink', 'red', 'yellow', 'olive', 'green', 'ocean', 'blue', 'indigo', 'violet'];
    };

    const label = () => l(enablePalettes() && isSupported() ? LABELS.on : LABELS.off);

    const handleSwitchModePress = () => setenablePalettes(v => !v);

    return (
        <DemoPage title="Palettes">
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
                    <Callout variant="warning" title="Browser Support">
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
